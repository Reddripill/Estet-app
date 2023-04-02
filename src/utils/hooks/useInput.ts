import { useState, useEffect } from 'react';
import { InputValidation } from '../types';

const useValidate = (value: string, checkList?: string[]) => {
	const [errors, setErrors] = useState<boolean>(false);
	const [isEmpty, setIsEmpty] = useState<boolean>(false);
	useEffect(() => {
		if (checkList) {
			checkList.forEach(item => {
				switch (item) {
					case 'emptyCheck':
						value.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
						break;
					default:
						console.log(item)
						break;
				}
			})
		}
	}, [checkList, value])
	useEffect(() => {
		if (isEmpty) {
			setErrors(true)
		} else {
			setErrors(false)
		}
	}, [isEmpty])
	return {
		errors
	}
}

export const useInput = (initial: string, checkList?: string[]): InputValidation => {
	const [value, setValue] = useState(initial);
	const [isClear, setIsClear] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);
	const validation = useValidate(value, checkList);

	useEffect(() => {
		if (!isClear && validation.errors) {
			setIsError(true)
		} else {
			setIsError(false)
		}
	}, [validation.errors, isClear])

	const sendData = () => {
		setValue('');
		setIsClear(true);
	}
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(event.currentTarget.value)
	}
	const onBlurHandler = () => {
		setIsClear(false);
	}
	return {
		value,
		onChangeHandler,
		onBlurHandler,
		isClear,
		isError,
		sendData,
		...validation
	}
}
