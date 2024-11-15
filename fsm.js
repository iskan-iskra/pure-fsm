export class FSM {
  constructor(initialState, transitions) {
    this.state = initialState;
    this.transitions = transitions;
  }

  send(event) {
    const transition = this.transitions[this.state]?.[event];
    if (transition) {
      console.log(
        `Переход: ${this.state} -> ${transition} по событию ${event}`
      );
      this.state = transition;
    } else {
      console.log(`Событие "${event}" невозможно в состоянии "${this.state}"`);
    }
  }

  getAvailableTransitions() {
    return Object.keys(this.transitions[this.state]);
  }

  getState() {
    return this.state;
  }
}

export const useFsm = (initialState, transitions) => {
  let state = initialState;

  const send = (event) => {
    const transition = transitions[state]?.[event];
    if (transition) {
      console.log(`Переход: ${state} -> ${transition} по событию ${event}`);
      state = transition;
    } else {
      console.log(`Событие "${event}" невозможно в состоянии "${state}"`);
    }
  };

  const getState = () => state;

  const getAvailableTransitions = () => Object.keys(transitions[state]);
  return {
    send,
    getState,
    getAvailableTransitions,
  };
};
