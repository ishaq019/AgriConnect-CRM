import { LightningElement } from 'lwc';

export default class CropPriceDisplay extends LightningElement {
    // Simple hardcoded data - no API calls needed
    cropPrices = [
        { id: '1', name: 'Rice', price: '2040', unit: 'per quintal' },
        { id: '2', name: 'Wheat', price: '2275', unit: 'per quintal' },
        { id: '3', name: 'Cotton', price: '6620', unit: 'per quintal' },
        { id: '4', name: 'Sugarcane', price: '315', unit: 'per quintal' }
    ];
}
