import { useState, useEffect } from 'react';

const useValidate = function (name, phone, rating) {
    const [errorName, setErrorName] = useState('');
    const [errorPhone, setErrorPhone] = useState(
        'Phone number should be 11 characters long and contain only numbers'
    );
    const [invalid, setInvalid] = useState(true);

    const validate = function (nameValue, phoneValue) {
        //regex to validate a phone number
        const numericReg = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
        const validPhone = phoneValue.match(numericReg);
        // validating fields

        // these should be renamed as errors, nameError, commentError
        nameValue.length < 3 &&
            setErrorName('Name should be at least 3 characters long');

        nameValue.length < 100 && nameValue.length >= 3 && setErrorName('');

        nameValue.length > 100 &&
            setErrorName('Name should be less than 100 characters long');

        if (validPhone !== null) {
            validPhone[0].length !== 11
                ? setErrorPhone(
                      'Phone number should be 11 characters long and contain only numbers'
                  )
                : setErrorPhone('');

            // validating the appointment form
            nameValue !== undefined &&
            nameValue.length < 100 &&
            nameValue.length >= 3 &&
            validPhone[0].length === 11
                ? setInvalid(false)
                : setInvalid(true);
        }

        return [errorName, errorPhone, invalid];
    };

    useEffect(() => {
        validate(name, phone, rating);
    }, [name, phone, rating]);

    return {
        errorName,
        errorPhone,
        invalid,
    };
};
export default useValidate;
