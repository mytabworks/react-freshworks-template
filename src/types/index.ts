export interface UserProps {
    id: number;
    firstname: string;
    surname: string;
    emailAddress: string;
    adminUser: boolean;
    disabled: boolean;
    invited: boolean;
    jobTitle: null | string;
    lastLogin: string;
    lockedOut: boolean;
    jobRoleIDs: number[]
    jobRoles: any[];
    loginMFAEnabled: boolean;
    userTypeIDs: number[];
    accreditationHubUpdates: boolean;
    marketingEmailOptIn: boolean;
    hasNameChangedInTheLastFiveYears: boolean;
    mobileCountry: { 
        value: null | string 
    };
    mobileCountryID: null | number;
    mobileNumber: null | string;
    homeNumber: null | string;
    workNumber: null | string;
    dateOfBirth: null | string;
    nationality: string | null;
    occupation: string | null;
    county: string | null;
    nationalInsuranceNumber: string | null;
    programIDs: number[];
    permissionIDs: number[];
    permissionPresetID: null | number;
    phoneNumber: null | string;
    title: null | string;
    photo: null | string;
    adminOrganisationIDs: number[];
    organisationIDs: number[];
    organisations: {
      address1: string;
      address2: string;
      address3: string;
      address4: string;
      adminUserIDs: number[];
      companyLogo: null | string;
      companyName: string;
      contactEmailAddress: null | string;
      contactNumber: null | string;
      countryID: number;
      id: number;
      lastNotificationDateTime: null | string;
      organisationTypeIDs: null | number[];
      postcode: string;
      registrationNumber: null | string;
      vatNumber: null | string;
      companyLogoURL?: string;
      discount: number;
      showPrices: boolean;
      pricingRegionID: number;
      canPayOnAccount: boolean;
    }[]
    applicationAreaIDs: number[];
    applicationAreas: {
      allowRegistration: boolean;
      baseURL: string;
      confirmEmailTemplate: string;
      description: string;
      enableMFA: boolean;
      id: number;
      inviteUserTemplate: string;
      maxPasswordAge: null | number;
      mfaTemplate: string;
      passwordMinLength: null | number;
      passwordMinStrength: null | number;
      passwordResetTemplate: string;
      requireEmailConfirmation: boolean;
    }[]
    address1: string;
    address2: string;
    address3: string;
    town: string | null;
    postCode: string;
    previousUserNameIDs: number[];
    previousName: null | string;
    previousNameEffectiveDate: null | string;
    previousUserNames: {name: string, effectiveDate: string}[];
    userAddressIDs: number[];
}
export interface previousNamesAndDatesProps {
  id: number;
  name: number;
  effectiveDate: Date;
}


export interface clientQuestionnaireProps {
    clientStep: {
      userID: number;
      clientInstructingOnBehalfOfCompany: boolean;
      title: string;
      forename: string;
      surname: string;
      dateOfBirth: Date | null;
      nationality: string;
      occupation: string;
      nationalInsuranceNumber: string;
      clientHasPreviousNames: string;
      previousNames: {
        ID: number;
        Name: string;
        EffectiveDate: any;
      }[],
      clientIsAJointClient: string;
      clientAuthorisedToCompleteForm: boolean;
      secondClientUserID: string;
      secondClientTitle: string;
      secondClientForename: string;
      secondClientSurname: string;
      secondClientDateOfBirth: string;
      secondClientNationality: string;
      secondClientEmailAddress: string;
      secondClientOccupation: string;
      secondClientNationalInsuranceNumber: string;
      clientRelationshipID: string;
      otherRelationshipToClient: string;
      secondClientHasPreviousNames: string;
      secondClientPreviousNames: {
        ID: number;
        Name: string;
        EffectiveDate: any;
      }[],
  },
  clientContactDetailsStep: {
      companyName: string;
      addressLine1: string;
      addressLine2: string;
      addressLine3: string;
      town: string;
      county: string;
      postCode: string;
      currentAddressOccupationStartDate: string;
      mobileNumber: string;
      homeNumber: string;
      workNumber: string;
      clientHasPreviousAddresses: boolean;
      previousAddresses: {
        ID: number;
        CompanyName: string,
        AddressLine1: string,
        AddressLine2: string,
        AddressLine3: string,
        Town: string,
        County: string,
        PostCode: string,
        StartOccupationDate: Date,
        EndOccupationDate: Date,
      }[],
  },
  secondClientStep: {
      hasTheSameClientAddress: boolean;
      companyName: string;
      addressLine1: string;
      addressLine2: string;
      addressLine3: string;
      town: string;
      county: string;
      postCode: string;
      currentAddressOccupationStartDate: string;
      mobileNumber: string;
      homeNumber: string;
      workNumber: string;
      secondClientHasPreviousAddresses: string;
      previousAddresses: any[],
  },
  bankDetailsStep: {
      bankName: string;
      accountName: string;
      sortCode: string;
      accountNumber: string;
      isJointAccount: string;
      secondClientBankName: string;
      secondClientAccountName: string;
      secondClientSortCode: string;
      secondClientAccountNumber: string;
  },
  clientDeclarationStep: {
      otherInformation: string;
      infoProvidedIsTrueAndAccurate: boolean;
  }
}
