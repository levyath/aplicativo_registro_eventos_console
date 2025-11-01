import { ILogStrategy } from "./ILogStrategy";
import * as fs from "fs";

export class FileLogStrategy implements ILogStrategy {
  private filePath = "logs.txt";

  output(logs: string[]): void {
    fs.appendFileSync(this.filePath, logs.join("\n") + "\n");
    console.log(`Logs salvos em ${this.filePath}\n`);
  }
}
