import Layout from '@components/Layout'
import React, { useLayoutEffect } from 'react'
import './index.scss'

interface NotFoundProps {
}

const NotFound: React.FunctionComponent<NotFoundProps> = ({}) => {

    useLayoutEffect(() => {
        const root = document.getElementById('root')

        root?.classList.add('no-half-bg')

        return () => root?.classList.remove('no-half-bg')
    }, [])
    
    return (
        <Layout>
            <div className="page-not-found">
                <h1 className='error-color' >404</h1>
                <h3>Location not found</h3>
            </div>
        </Layout>
    )
}

export default NotFound