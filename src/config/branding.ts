export default {
    logo: {
        auth: '',
        navbar: '',
        mobile: ''
    },
    brandSite: '',
    background: '',
    brandName: 'Mock',
    landingPath: '/',
    applicationAreaID: 3,
    allowOrganisationSelection: false,
    allowImpersonation: true,
    services: {
        endpoint: process.env.REACT_APP_DATA_API_URL!,
        gql: process.env.REACT_APP_GRAPH_API_URL!,
        env: process.env.REACT_APP_ENV!,
        getaddress: process.env.REACT_APP_GET_ADDRESS_API_KEY,
    },
    getAddressKey: process.env.REACT_APP_GET_ADDRESS_API_KEY,
    token: {
        name: 'mockTK',
        expireday: 1, // 1 day
        domain: window.location.hostname.split('.').slice(-2).join('.') || '',
        expireMessage: 'To protect your data, you have been logged out. Please login again to continue.'
    },
    toaster: {
        soundEffectEnable: false,
        pathSoundEffectIn: '/media/audio/mixkit-message-pop-alert.mp3',
        pathSoundEffectOut: '/media/audio/mixkit-long-pop.wav'
    },
    messages: {
        error: process.env.REACT_APP_ENV === 'production' ? 'Something went wrong.' : 'There is an issue with the endpoint.',
        fail: 'There are errors with your entry. Please check and try again.'
    },
    notification: {
        soundEffectEnable: true,
        pathSoundEffect: '/media/audio/mixkit-electric-fence-fx-2968.wav'
    },
}