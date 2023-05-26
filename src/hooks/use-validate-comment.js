import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

const useValidateComment = (name, comment, rating) => {
    const [errorName, setErrorName] = useState('');
    const [errorComment, setErrorComment] = useState('');
    const [errorRating, setErrorRating] = useState('');
    const [invalid, setInvalid] = useState(true);

    const validate = function (nameValue, commentValue, ratingValue) {
        // validating fields
        //checking name
        nameValue.length < 3 &&
            setErrorName(
                <FormattedMessage
                    id="errName"
                    defaultMessage="Name should be at least 3 characters long"
                />
            );

        nameValue.length < 100 && nameValue.length >= 3 && setErrorName('');

        nameValue.length > 100 &&
            setErrorName(
                <FormattedMessage
                    id="errNameBig"
                    defaultMessage="Name should be less than 100 characters long"
                />
            );

        //checking comment
        commentValue !== undefined &&
            commentValue.length < 10 &&
            setErrorComment(
                <FormattedMessage
                    id="errComment"
                    defaultMessage="Comment should be at least 10 characters long"
                />
            );

        commentValue !== undefined &&
            commentValue.length >= 10 &&
            commentValue.length < 1000 &&
            setErrorComment('');

        commentValue !== undefined &&
            commentValue.length > 1000 &&
            setErrorComment(
                <FormattedMessage
                    id="errCommentBig"
                    defaultMessage="Comment should be less than 1000 characters"
                />
            );

        //checking rating
        ratingValue === 0
            ? setErrorRating(
                  <FormattedMessage
                      id="errRating"
                      defaultMessage="Please rate the doctor from 1 to 5"
                  />
              )
            : setErrorRating('');

        // validating the comment form

        nameValue !== undefined &&
        nameValue.length < 100 &&
        nameValue.length >= 3 &&
        commentValue !== undefined &&
        commentValue.length >= 10 &&
        commentValue.length < 1000 &&
        ratingValue > 0
            ? setInvalid(false)
            : setInvalid(true);

        console.log(nameValue, commentValue, ratingValue, invalid);
        return [errorName, errorComment, errorRating, invalid];
    };

    useEffect(() => {
        validate(name, comment, rating);
    }, [name, comment, rating]);

    return {
        errorName,
        errorComment,
        errorRating,
        invalid,
    };
};
export default useValidateComment;
