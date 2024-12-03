import React, { useState } from 'react';


export const SearcherBeta = () => {

    const [submitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        e.target.blur();
        try {
            let response = await fetch("/api/remedies", {
            method: "POST",
            body: JSON.stringify({
                mind: searchProps.mind,
                userId: session?.user.id,
                // general: form.data.general,
                // specyfic: form.data.specyfic,
                // positiveModalities: form.data.positiveModalities,
                // negativeModalities: form.data.negativeModalities,
            }),
            });
            response = await response.json();

        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <></>
    );


};

