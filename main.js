import { useFsm } from "./fsm";

const modalFSM = useFsm("closed", {
  closed: { open: "loading" },
  loading: { success: "open", fail: "closed" },
  open: { close: "closed" },
});

console.log(`Начальное состояние: ${modalFSM.getState()}`);
modalFSM.send("open");
console.log(modalFSM.getAvailableTransitions());
modalFSM.send("success");

modalFSM.send("success");
modalFSM.send("close");
