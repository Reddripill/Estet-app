import React, { useState } from 'react';
import { Currency, FCWidthChildren } from '../utils/types';

interface IContext {
	type: Currency;
	setType: React.Dispatch<React.SetStateAction<Currency>>
}

interface Props {
	value: Currency;
}

const CurrencyContext = React.createContext<IContext>({ type: 'Dol', setType: () => { } })

const CurrencyProvider: FCWidthChildren<Props> = ({ children, value }) => {
	const [currency, setCurrency] = useState<Currency>(value);
	return (
		<CurrencyContext.Provider value={{ type: currency, setType: setCurrency }}>
			{children}
		</CurrencyContext.Provider>
	)
}

export default CurrencyProvider;