# AgroConnect Pro - Phase 2 Documentation
## Org Setup and Configuration

**Project Title:** AgroConnect Pro - Smart Agriculture Management System for Indian Farmers  
**Industry:** Agriculture Technology (AgTech)  
**Developer:** [Your Name] - TCS LastMile Phase 2 Participant  
**Date:** September 17, 2025

---

## **PHASE 2: ORG SETUP AND CONFIGURATION**

This phase focuses on establishing the foundational Salesforce environment for AgroConnect Pro, ensuring all organizational settings, security configurations, and user management are properly configured to support our agriculture management system.

---

### **1. SALESFORCE DEVELOPER EDITION SETUP**

#### **1.1 Developer Org Creation**
**Procedure:**
1. Navigated to developer.salesforce.com
2. Created new Developer Edition org with username: [your-dev-org-username]
3. Verified email and activated the org
4. Initial login completed successfully

**Screenshot:** *[Include screenshot of successful org creation]*

**Rationale:** Developer Edition provides full Salesforce functionality free of cost, perfect for building and testing our agriculture management solution before any potential production deployment.

---

### **2. COMPANY PROFILE SETUP**

#### **2.1 Company Information Configuration**
**Procedure:**
1. Setup → Company Information
2. Updated organization details for AgroConnect Pro:
   - **Company Name:** AgroConnect Technologies Pvt Ltd
   - **Industry:** Agriculture & Food Production  
   - **Street Address:** Technology Hub, Kadapa
   - **City:** Kadapa
   - **State/Province:** Andhra Pradesh
   - **Country:** India
   - **Postal Code:** 516001
   - **Phone:** +91-8562-XXXXXX
   - **Website:** www.agroconnect-pro.com

**Screenshot:** *[Include screenshot of Company Information page]*

**Business Justification:** Proper company setup ensures accurate data context and establishes professional credibility for our agriculture technology solution.

#### **2.2 Locale and Language Settings**
**Procedure:**
1. Setup → Company Information → Locale Settings
2. Configured regional settings:
   - **Locale:** English (India)
   - **Time Zone:** (GMT+05:30) India Standard Time
   - **Language:** English
   - **First Day of Week:** Monday
   - **Date Format:** DD/MM/YYYY (Indian standard)
   - **Time Format:** 12-hour format

**Screenshot:** *[Include screenshot of Locale Settings]*

**Business Impact:** Indian locale settings ensure all date/time displays match farmer expectations and regional business practices.

#### **2.3 Currency Configuration**
**Procedure:**
1. Setup → Company Information → Currency
2. Set primary currency:
   - **Corporate Currency:** INR (Indian Rupee)
   - **Currency Symbol:** ₹
   - **Decimal Places:** 2
   - **Number Format:** 1,00,000.00 (Indian numbering system)

**Screenshot:** *[Include screenshot of Currency Settings]*

**Agricultural Context:** INR configuration ensures all cost calculations for seeds, fertilizers, market prices, and farmer transactions display in familiar currency format.

---

### **3. FISCAL YEAR SETUP**

#### **3.1 Fiscal Year Configuration**
**Procedure:**
1. Setup → Company Information → Fiscal Year
2. Configured fiscal year settings:
   - **Fiscal Year:** Standard (April - March)
   - **Start Month:** April
   - **Fiscal Year Naming:** Based on ending month (FY 2025-26)
   - **Week Start Day:** Monday

**Screenshot:** *[Include screenshot of Fiscal Year Settings]*

**Business Rationale:** April-March fiscal year aligns with Indian financial year, crucial for agricultural loan cycles, government subsidy reporting, and seasonal crop planning that follows Kharif (June-October) and Rabi (November-April) seasons.

---

### **4. BUSINESS HOURS CONFIGURATION**

#### **4.1 Standard Business Hours Setup**
**Procedure:**
1. Setup → Business Hours
2. Created "AgroConnect Standard Hours":
   - **Monday - Friday:** 9:00 AM - 6:00 PM IST
   - **Saturday:** 9:00 AM - 1:00 PM IST
   - **Sunday:** Closed
   - **Time Zone:** (GMT+05:30) India Standard Time

**Screenshot:** *[Include screenshot of Business Hours setup]*

#### **4.2 Agricultural Season Extended Hours**
**Procedure:**
1. Created additional business hours for peak farming seasons
2. "Agricultural Peak Season Hours":
   - **Monday - Saturday:** 7:00 AM - 8:00 PM IST
   - **Sunday:** 8:00 AM - 12:00 PM IST
   - **Active Period:** During Kharif (June-October) and Rabi (November-March) seasons

**Screenshot:** *[Include screenshot of Extended Hours setup]*

**Agricultural Significance:** Extended hours during planting and harvesting seasons ensure farmers receive timely support when they need it most.

#### **4.3 Holiday Calendar Setup**
**Procedure:**
1. Setup → Holidays
2. Added Indian national and regional holidays:
   - Independence Day (August 15)
   - Republic Day (January 26)
   - Gandhi Jayanti (October 2)
   - Diwali, Holi, Eid festivals
   - Regional harvest festivals (Pongal, Makar Sankranti)

**Screenshot:** *[Include screenshot of Holiday Calendar]*

**Cultural Context:** Including agricultural festivals ensures the system respects farming community traditions and seasonal celebrations.

---

### **5. USER MANAGEMENT AND PROFILES**

#### **5.1 Profile Creation and Configuration**

**Procedure:**
1. Setup → Profiles
2. Created custom profiles based on standard profiles:

**5.1.1 System Administrator Profile**
- **Base Profile:** System Administrator
- **Name:** AgroConnect System Admin
- **Description:** Full system access for platform management
- **Key Permissions:** All administrative functions enabled

**Screenshot:** *[Include screenshot of Admin Profile]*

**5.1.2 Agricultural Officer Profile**
- **Base Profile:** Standard User
- **Name:** Agricultural Officer
- **Description:** Regional extension officers providing farmer guidance
- **Key Permissions:**
  - Read/Edit on Account (Farmers)
  - Read/Edit on Farm records for their territory
  - Read-only on sensitive financial data
  - Access to reporting and analytics

**Screenshot:** *[Include screenshot of Agricultural Officer Profile]*

**5.1.3 Farm Manager Profile**
- **Base Profile:** Standard User
- **Name:** Farm Manager
- **Description:** Individual farm operations and crop planning
- **Key Permissions:**
  - Full access to owned farm records
  - Create/Edit crop cycles and activities
  - View market prices and recommendations
  - Limited administrative functions

**Screenshot:** *[Include screenshot of Farm Manager Profile]*

**5.1.4 Farmer Profile**
- **Base Profile:** Customer Community User
- **Name:** Farmer Community User
- **Description:** End farmers accessing the system via Experience Site
- **Key Permissions:**
  - Access only personal farm and crop data
  - Create service requests and support cases
  - View market prices and agricultural insights
  - Mobile-optimized interface access

**Screenshot:** *[Include screenshot of Farmer Profile]*

**5.1.5 Service Provider Profile**
- **Base Profile:** Partner Community User
- **Name:** Service Provider Community
- **Description:** Agricultural service providers accessing marketplace
- **Key Permissions:**
  - Manage service catalogs and pricing
  - Respond to farmer service requests
  - View relevant farmer contact information
  - Access performance analytics

**Screenshot:** *[Include screenshot of Service Provider Profile]*

---

### **6. ROLE HIERARCHY SETUP**

#### **6.1 Role Hierarchy Design**
**Procedure:**
1. Setup → Roles
2. Created hierarchical structure reflecting agricultural organization:

```
Agricultural Director (CEO Level)
├── Regional Agricultural Officers
│   ├── Andhra Pradesh - North Region
│   ├── Andhra Pradesh - South Region  
│   └── Telangana Region
└── System Administration Team
    ├── Data Management Specialist
    └── Technical Support Lead
        └── Field Extension Officers
            ├── Mandal Level Officers
            └── Village Level Workers
```

**Screenshot:** *[Include screenshot of Role Hierarchy]*

**Organizational Context:** Hierarchy mirrors Indian agricultural extension system with regional divisions matching state boundaries and administrative levels.

---

### **7. ORGANIZATION-WIDE DEFAULTS (OWD) CONFIGURATION**

#### **7.1 Standard Objects OWD Settings**
**Procedure:**
1. Setup → Sharing Settings → Organization-Wide Defaults
2. Configured access levels:

| Object | Internal Users | External Users | Rationale |
|--------|---------------|----------------|-----------|
| Account | Private | Private | Farmer data confidentiality |
| Contact | Controlled by Parent | Controlled by Parent | Linked to Account security |
| Opportunity | Private | No Access | Business sensitive information |
| Case | Private | Private | Support case privacy |
| Task | Private | Private | Activity confidentiality |
| Event | Private | Private | Meeting/event privacy |

**Screenshot:** *[Include screenshot of OWD Settings]*

**Security Rationale:** Private defaults ensure data security while allowing controlled sharing through roles and sharing rules.

#### **7.2 Custom Objects OWD (To be implemented in Phase 3)**
**Note:** Custom objects (Farm__c, Crop_Cycle__c, etc.) OWD settings will be configured in Phase 3 after object creation. Planned settings:

- **Farm__c:** Controlled by Parent (Account)
- **Crop_Cycle__c:** Controlled by Parent (Farm__c)
- **Market_Price_Alert__c:** Public Read Only
- **Resource_Planning__c:** Private

---

### **8. PERMISSION SETS CONFIGURATION**

#### **8.1 Specialized Permission Sets**

**8.1.1 Market Data Access Permission Set**
**Procedure:**
1. Setup → Permission Sets → New
2. Created "Market Data Access" permission set:
   - **Purpose:** Access to market price data and analytics
   - **Assigned To:** Agricultural Officers, Farm Managers
   - **Key Permissions:** 
     - Read access to Market Price objects
     - Access to pricing reports and dashboards

**Screenshot:** *[Include screenshot of Market Data Permission Set]*

**8.1.2 Mobile App Access Permission Set**
**Procedure:**
1. Created "Mobile Agriculture App" permission set:
   - **Purpose:** Enhanced mobile functionality for field workers
   - **Key Permissions:**
     - Offline access capabilities
     - Photo upload permissions
     - GPS location access

**Screenshot:** *[Include screenshot of Mobile App Permission Set]*

---

### **9. SHARING RULES SETUP**

#### **9.1 Territory-Based Sharing**
**Note:** Detailed sharing rules will be implemented in Phase 3 after custom object creation. Planned approach:

**9.1.1 Regional Agricultural Officer Sharing**
- Farmers in Andhra Pradesh North → AP North Regional Officer access
- Farmers in Andhra Pradesh South → AP South Regional Officer access  
- Farmers in Telangana → Telangana Regional Officer access

**9.1.2 Crop Specialist Sharing**
- Rice crop cycles → Rice Specialist access
- Cotton crop cycles → Cotton Specialist access
- Horticultural crops → Horticulture Specialist access

**Implementation Status:** Framework designed, to be implemented in Phase 3.

---

### **10. CUSTOM SETTINGS CONFIGURATION**

#### **10.1 AgroConnect Configuration Settings**
**Procedure:**
1. Setup → Custom Settings → New
2. Created hierarchy custom settings:

**10.1.1 Agricultural Parameters**
- **Setting Name:** Agricultural_Parameters__c
- **Parameters:**
  - Default_Crop_Cycle_Duration__c (Number)
  - Market_Price_Refresh_Interval__c (Number)
  - Weather_API_Endpoint__c (Text)
  - Emergency_Alert_Threshold__c (Number)

**Screenshot:** *[Include screenshot of Custom Settings]*

**Business Value:** Centralized configuration allows easy adjustment of system parameters without code changes.

---

### **11. EMAIL ADMINISTRATION**

#### **11.1 Email Configuration**
**Procedure:**
1. Setup → Email Administration
2. Configured email settings:
   - **Organization-Wide Email Address:** noreply@agroconnect-pro.com
   - **Email Deliverability:** System + Application emails enabled
   - **Bounce Management:** Enabled with automatic handling
   - **Email Templates:** Location set to custom folder structure

**Screenshot:** *[Include screenshot of Email Administration]*

**Communication Strategy:** Professional email setup ensures reliable farmer communication and system notifications.

---

### **12. USER CREATION AND ASSIGNMENT**

#### **12.1 Test Users Creation**
**Procedure:**
1. Setup → Users → New User
2. Created representative users for testing:

**12.1.1 Agricultural Officer User**
- **Name:** Rajesh Kumar
- **Username:** rajesh.kumar@agroconnect-dev.com
- **Profile:** Agricultural Officer
- **Role:** AP North Regional Officer
- **License:** Salesforce Platform

**12.1.2 Farm Manager User**  
- **Name:** Priya Sharma
- **Username:** priya.sharma@agroconnect-dev.com
- **Profile:** Farm Manager
- **Role:** Field Extension Officer
- **License:** Salesforce Platform

**Screenshot:** *[Include screenshot of User Management]*

---

### **13. MOBILE ADMINISTRATION**

#### **13.1 Salesforce Mobile App Configuration**
**Procedure:**
1. Setup → Mobile Administration
2. Configured mobile access:
   - **Mobile App Access:** Enabled for all user profiles
   - **Connected App:** AgroConnect Mobile configured
   - **Offline Capabilities:** Enabled for critical objects
   - **Mobile Dashboards:** Configured for field use

**Screenshot:** *[Include screenshot of Mobile Configuration]*

**Field Usability:** Mobile configuration essential for farmers and field officers working in remote areas.

---

### **14. DATA MANAGEMENT PREPARATION**

#### **14.1 Data Import Tools Configuration**
**Procedure:**
1. Setup → Data Import Wizard settings reviewed
2. Data Loader installation verified
3. Import templates prepared for:
   - Farmer registration data
   - Crop master data
   - Market price historical data
   - Service provider information

**Implementation Note:** Actual data imports will be performed in Phase 8 (Data Management and Deployment).

---

### **15. SECURITY REVIEW AND TESTING**

#### **15.1 Security Configuration Validation**
**Testing Performed:**
1. Login testing with different user profiles
2. Access level verification for each role
3. Password policy enforcement testing
4. Session timeout configuration verification

**Security Measures Implemented:**
- Strong password requirements
- Session timeout: 120 minutes
- Login IP ranges configured for admin users
- Two-factor authentication enabled for administrators

**Screenshot:** *[Include screenshot of Security Settings]*

---

## **PHASE 2 SUMMARY**

### **Completed Configurations:**
✅ **Company Profile Setup** - Indian agriculture business context established  
✅ **Fiscal Year Configuration** - April-March cycle aligned with Indian financial year  
✅ **Business Hours Setup** - Standard and seasonal agricultural hours configured  
✅ **User Profiles Created** - 5 specialized profiles for different user types  
✅ **Role Hierarchy Established** - Agricultural organization structure implemented  
✅ **Permission Sets Defined** - Specialized access controls created  
✅ **Custom Settings Framework** - Configuration management system established  
✅ **Email Administration** - Professional communication setup completed  
✅ **Mobile Configuration** - Field-ready mobile access enabled  
✅ **Security Implementation** - Enterprise-grade security measures applied  

### **Deferred to Future Phases:**
📋 **Custom Object OWD** - To be configured in Phase 3 after object creation  
📋 **Detailed Sharing Rules** - To be implemented with custom objects in Phase 3  
📋 **Integration User Setup** - To be created during Phase 7 (Integration)  
📋 **Production Security Hardening** - To be applied during Phase 8 (Deployment)  

### **Next Steps:**
1. **Phase 3:** Create custom objects (Farm__c, Crop_Cycle__c, etc.)
2. **Configure object-level security** settings
3. **Design and implement field-level security** for sensitive data
4. **Create record types and page layouts** for different user experiences

---

### **TECHNICAL SPECIFICATIONS ACHIEVED:**

| Component | Status | Details |
|-----------|--------|---------|
| Org Setup | ✅ Complete | Developer Edition activated and configured |
| Company Profile | ✅ Complete | Indian agriculture context established |
| User Management | ✅ Complete | 5 profiles, 7 roles, 3 permission sets created |
| Security Foundation | ✅ Complete | OWD, password policies, session management |
| Business Context | ✅ Complete | Fiscal year, holidays, business hours configured |
| Mobile Readiness | ✅ Complete | Mobile app access and offline capabilities enabled |
| Communication Setup | ✅ Complete | Email administration and templates configured |

---

**Phase 2 Completion Status:** ✅ **COMPLETE**  
**Documentation Created:** September 17, 2025  
**Next Phase:** Phase 3 - Data Model and Relationships  
**Estimated Phase 3 Start Date:** September 18, 2025

---

### **APPENDIX: SCREENSHOT REFERENCES**

*Note: All screenshots referenced in this document should be captured and included in the final PDF version for mentor review. Screenshots should show:*

1. Company Information configuration screen
2. Fiscal Year settings page  
3. Business Hours setup
4. Each custom profile configuration
5. Role hierarchy diagram
6. Permission set details
7. OWD settings page
8. Custom settings configuration
9. User management interface
10. Security settings summary

**GitHub Repository:** [Your GitHub URL]  
**Project Status:** Phase 2 Complete, Phase 3 In Progress