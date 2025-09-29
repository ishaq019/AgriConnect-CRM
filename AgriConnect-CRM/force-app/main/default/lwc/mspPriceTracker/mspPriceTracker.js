import { LightningElement,api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getMSPPrices from '@salesforce/apex/MSPPriceController.getMSPPrices';
import { refreshApex } from '@salesforce/apex';


export default class MspPriceTracker extends LightningElement {
    @track priceData = [];
    @track filteredPrices = [];
    @track selectedCrop = '';
    @track selectedCategory = '';
    @track isLoading = false;
    @api height = 400;
    
    get containerStyle() {
        return `height: ${this.height}px; overflow-y: auto;`;
    }
    
    wiredPricesResult;

    // Filter options
    get cropOptions() {
        const crops = [...new Set(this.priceData.map(price => price.Crop_Name__c))];
        return [
            { label: 'All Crops', value: '' },
            ...crops.map(crop => ({ label: crop, value: crop }))
        ];
    }

    get categoryOptions() {
        return [
            { label: 'All Categories', value: '' },
            { label: 'Kharif', value: 'Kharif' },
            { label: 'Rabi', value: 'Rabi' },
            { label: 'Summer', value: 'Summer' }
        ];
    }
    

    get showNoData() {
        return !this.isLoading && (!this.priceData || this.priceData.length === 0);
    }

    @wire(getMSPPrices)
    wiredPrices(result) {
        this.wiredPricesResult = result;
        if (result.data) {
            this.priceData = result.data.map(price => {
                return {
                    ...price,
                    formattedDate: this.formatDate(price.Effective_Date__c),
                    changeClass: this.getPriceChangeClass(price.Price_Change_Percent__c),
                    changeIcon: this.getPriceChangeIcon(price.Price_Change_Percent__c)
                };
            });
            this.applyFilters();
            this.isLoading = false;
        } else if (result.error) {
            this.showErrorToast('Error loading MSP prices: ' + result.error.body.message);
            this.isLoading = false;
        }
    }

    connectedCallback() {
        this.isLoading = true;
    }

    // Event Handlers
    handleCropChange(event) {
        this.selectedCrop = event.detail.value;
        this.applyFilters();
    }

    handleCategoryChange(event) {
        this.selectedCategory = event.detail.value;
        this.applyFilters();
    }

    refreshPrices() {
        this.isLoading = true;
        refreshApex(this.wiredPricesResult)
            .then(() => {
                this.showSuccessToast('MSP prices refreshed successfully');
            })
            .catch(error => {
                this.showErrorToast('Error refreshing prices: ' + error.body.message);
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    // Helper Methods
    applyFilters() {
        let filtered = [...this.priceData];

        if (this.selectedCrop) {
            filtered = filtered.filter(price => price.Crop_Name__c === this.selectedCrop);
        }

        if (this.selectedCategory) {
            filtered = filtered.filter(price => price.Market_Category__c === this.selectedCategory);
        }

        this.filteredPrices = filtered;
    }

    formatDate(dateString) {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    getPriceChangeClass(changePercent) {
        if (!changePercent) return 'slds-text-color_weak';
        return changePercent > 0 ? 'slds-text-color_success' : 'slds-text-color_error';
    }

    getPriceChangeIcon(changePercent) {
        if (!changePercent) return '';
        return changePercent > 0 ? '⬆️' : '⬇️';
    }

    // Toast Methods
    showSuccessToast(message) {
        this.dispatchEvent(new ShowToastEvent({
            title: 'Success',
            message: message,
            variant: 'success'
        }));
    }

    showErrorToast(message) {
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error',
            message: message,
            variant: 'error'
        }));
    }
}
