import React, { useEffect, useState } from 'react';
import "../styles/process.css";
import 'rsuite/Steps/styles/index.css';
import { Welcome } from '../components/process/welcome';
import { Steps, Panel, ButtonGroup, Button } from 'rsuite';
import { InlineWidget } from "react-calendly";

export const Process = () => {
    const [step, setStep] = useState(0);
    const [autoProceed, setAutoProceed] = useState(false);
    const [firstTimeUser, setFirstTimeUser] = useState(false); // Estado para controlar si es la primera vez del usuario

    useEffect(() => {
        const welcomeFirstTime = localStorage.getItem("welcome_first_time");
        if (welcomeFirstTime === "true") {
            setFirstTimeUser(true);
            localStorage.removeItem("welcome_first_time"); // Eliminar el flag para futuras visitas
        }
    }, []);

    const onNext = () => {
        setStep(prevStep => prevStep + 1);
    };

    const onPrevious = () => {
        setStep(prevStep => prevStep - 1);
        setAutoProceed(false); // Reinicia el avance automático al paso anterior
    };

    // Función para renderizar el componente correspondiente al paso actual
    const renderStepComponent = () => {
        switch (step) {
            case 0:
                return firstTimeUser === false ? <Welcome setAutoProceed={setAutoProceed} /> : null; // Mostrar Welcome si es la primera vez
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
            <div className='row col-9 mx-auto mt-5'>
                <div className='col-12'>
                    <Steps current={step} className='mb-5'>
                        <Steps.Item title="Welcome" />
                        <Steps.Item title="Payment Process" />
                        <Steps.Item title="Confirmation" />
                    </Steps>

                    <Panel header={`Step: ${step + 1}`}>
                        {renderStepComponent()}
                    </Panel>

                    <hr />

                    <ButtonGroup>
                        <Button onClick={onPrevious} disabled={step === 0}>
                            Previous
                        </Button>
                        {step < 2 && (
                            <Button onClick={onNext} disabled={!autoProceed}>
                                Next
                            </Button>
                        )}
                    </ButtonGroup>
                </div>
            </div>
        </section>
    );
};
