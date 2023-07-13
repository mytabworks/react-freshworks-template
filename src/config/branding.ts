export default {
    logo: {
        auth: '',
        navbar: '',
        mobile: ''
    },
    brandSite: '',
    brandName: 'Mock',
    landingPath: './index.html',
    services: {
        endpoint: process.env.REACT_APP_DATA_API_URL!,
        env: process.env.REACT_APP_ENV!,
    },
    token: {
        name: 'mockTK',
        expireday: 1, // 1 day
        domain: window.location.hostname.split('.').slice(-2).join('.') || '',
        expireMessage: 'To protect your data, you have been logged out. Please login again to continue.'
    },
    messages: {
        error: process.env.REACT_APP_ENV === 'production' ? 'Something went wrong.' : 'There is an issue with the endpoint.',
        fail: 'There are errors with your entry. Please check and try again.'
    },
}