import * as readlineSync from "readline-sync";
import { LogManager } from "./LogManager";
import { ConsoleLogStrategy } from "./strategies/ConsoleLogStrategy";
import { FileLogStrategy } from "./strategies/FileLogStrategy";
import { DailySummaryLogStrategy } from "./strategies/DailySummaryLogStrategy";

console.log("=== Sistema de Logs (TypeScript) ===");
console.log("Comandos:\n\n-> log <mensagem> \n-> mostrar \n-> tipo <console|arquivo|resumo> \n-> sair\n");

const logManager = LogManager.getInstance();

while (true) {
  const input = readlineSync.question("> ");
  const [command, ...args] = input.split(" ");
  const param = args.join(" ");

  switch (command.toLowerCase()) {
    case "log":
      if (!param) {
        console.log("Uso: log <mensagem>");
      } else {
        logManager.addLog(param);
      }
      break;

    case "mostrar":
      logManager.showLogs();
      break;

    case "tipo":
      switch (param.toLowerCase()) {
        case "console":
          logManager.setStrategy(new ConsoleLogStrategy());
          console.log("Saída definida para CONSOLE.\n");
          break;
        case "arquivo":
          logManager.setStrategy(new FileLogStrategy());
          console.log("Saída definida para ARQUIVO.\n");
          break;
        case "resumo":
          logManager.setStrategy(new DailySummaryLogStrategy());
          console.log("Saída definida para RESUMO DIÁRIO.\n");
          break;
        default:
          console.log("Tipos válidos: console | arquivo | resumo\n");
          break;
      }
      break;

    case "sair":
      console.log("Encerrando o programa...");
      process.exit(0);
      break;

    default:
      console.log("Comando inválido!");
      break;
  }
}
