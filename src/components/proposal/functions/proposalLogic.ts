import { EvaluatedItem } from "../itemProposal";

export const getEvaluatedItems = (proposalNum: number, targetNumb: number) => {
  const proposalDigits = proposalNum.toString().split('').map(parseInt);
  const targetDigits = targetNumb.toString().split('').map(parseInt);
  
  const good: EvaluatedItem = {
    count: 0,
    evaluation: 'good',
  }
  const regular: EvaluatedItem = {
    count: 0,
    evaluation: 'regular',
  }
  const bad: EvaluatedItem = {
    count: 0,
    evaluation: 'bad',
  }
  
  proposalDigits.forEach((proposalDigit, index) => {
    const targetDigit = targetDigits[index];

    // good validations
    if (proposalDigit === targetDigit) {
      good.count++;
      return;
    }

    // regular validations
    if (targetDigits.includes(proposalDigit)) {
      regular.count++;
      return;
    }

    // bad validations
    bad.count++;
  });

  return [good, regular, bad];
}

