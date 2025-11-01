import { ILogStrategy } from "./strategies/ILogStrategy";
import { ConsoleLogStrategy } from "./strategies/ConsoleLogStrategy";

export class LogManager {
  private static instance: LogManager;
  private logs: string[] = [];
  private strategy: ILogStrategy = new ConsoleLogStrategy();

  private constructor() {}

  static getInstance(): LogManager {
    if (!LogManager.instance) {
      LogManager.instance = new LogManager();
    }
    return LogManager.instance;
  }

  setStrategy(strategy: ILogStrategy) {
    this.strategy = strategy;
  }

  addLog(message: string) {
    const timestamp = new Date().toISOString().replace("T", " ").substring(0, 19);
    this.logs.push(`${timestamp} - ${message}`);
    console.log("Log registrado!");
  }

  showLogs() {
    this.strategy.output(this.logs);
  }
}
