import React, { useEffect, useState } from 'react';
import "../styles/process.css";
import 'rsuite/Steps/styles/index.css';
import { Welcome } from '../components/process/welcome';
import { Steps, Panel } from 'rsuite';
import { InlineWidget } from "react-calendly";

export const Process = () => {
    const [verified, setVerified] = useState(false);
    const [step, setStep] = useState(0);
    const [autoProceed, setAutoProceed] = useState(false);

    useEffect(() => {
        const verified_user = localStorage.getItem("verified_user");
        if (verified_user) {
            setVerified(true); // Si hay un usuario verificado, establece el estado como true
            setStep(1); // Avanza directamente al paso 2 si el usuario está verificado
        }
    }, []);

    const onNext = () => {
        setStep(prevStep => prevStep + 1);
    };

    // Función para renderizar el componente correspondiente al paso actual
    const renderStepComponent = () => {
        switch (step) {
            case 0:
                return verified ? null :  <Welcome setAutoProceed={setAutoProceed} />; // Mostrar Welcome si es la primera vez
            case 1:
                return <InlineWidget url="https://calendly.com/edijavier10" />;
            case 2:
                return <div>Confirmation Step Content</div>;
            default:
                return null;
        }
    };

    useEffect(() => {
        if (autoProceed) {
            onNext();
        }
    }, [autoProceed]);

    return (
        <section className='container-fluid' id='process'>
            <div className='row col-11 mx-auto mt-5'>
                    <Steps current={step} className='mb-5'>
                        <Steps.Item title="Welcome" />
                        <Steps.Item title="Payment Process" />
                        <Steps.Item title="Confirmation" />
                    </Steps>

                    <Panel >
                        {renderStepComponent()}
                    </Panel>
            </div>
        </section>
    );
};

