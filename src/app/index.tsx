import React, { Suspense } from "react";
import Layout from "@components/Layout";
import Loader from "@components/Loader";
import { useClient } from "@components/ClientProvider";
import ErrorLocation404 from "./pages/Error/404";
import { MainView, Modal } from "./pages";

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
                {context?.location === 'left_nav_cti' ? (
                    <MainView />
                ) : context?.location === 'full_page_app' ? (
                    <MainView />
                ) : context?.location === 'contact_entity_menu' ? (
                    <MainView />
                ) : context?.location === 'overlay' ? (
                    <Modal />
                ) : context?.location === 'dialog' ? (
                    <Modal />
                ) : <ErrorLocation404 />}
            </Layout>
        </Suspense>
	);
}

export default Application