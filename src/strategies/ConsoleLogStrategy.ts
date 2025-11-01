import { ILogStrategy } from "./ILogStrategy";

export class ConsoleLogStrategy implements ILogStrategy {
  output(logs: string[]): void {
    console.log("\n=== Logs no Console ===");
    logs.forEach((log) => console.log(log));
    console.log("========================\n");
  }
}
