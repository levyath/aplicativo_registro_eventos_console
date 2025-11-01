import { ILogStrategy } from "./ILogStrategy";

export class DailySummaryLogStrategy implements ILogStrategy {
  output(logs: string[]): void {
    const grouped = logs.reduce((acc: Record<string, number>, log) => {
      const date = log.split(" ")[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    console.log("\n=== Resumo Diário ===");
    for (const [day, count] of Object.entries(grouped)) {
      console.log(`${day}: ${count} eventos`);
    }
    console.log("=====================\n");
  }
}
