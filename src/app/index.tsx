import React, { Suspense } from "react";
import Layout from "@components/Layout";
import Loader from "@components/Loader";
import { useClient } from "@components/ClientProvider";
import ErrorPage404 from "./pages/Error/404";
import Sample from "./pages/Sample";

const Application: React.FunctionComponent = () => {
    const { loading, error, client, user, context } = useClient()

    if(loading) {
        return (
            <Loader />
        )
    }

    if(error) {
        return (
            <h4 style={{color: 'red', textAlign: 'center'}}>{error}</h4>
        )
    }

	return (
        <Suspense fallback={<Loader />}>
            <Layout>
                <Sample />
            </Layout>
        </Suspense>
	);
}

export default Application