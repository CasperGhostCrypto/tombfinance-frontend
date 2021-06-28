import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import { Bank } from '../tomb-finance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useZapOut = (bank: Bank) => {
  const tombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleZap = useCallback(
    (zappingToken: string, tokenName: string, amount: string) => {
      handleTransactionReceipt(
        tombFinance.zapOut(zappingToken, tokenName, amount),
        `Zap ${amount} out ${bank.depositTokenName}.`,
      );
    },
    [bank, tombFinance, handleTransactionReceipt],
  );
  return { onZap: handleZap };
};

export default useZapOut;
