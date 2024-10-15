import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    
    const input = await MissionUtils.Console.readLineAsync();
    if (!input.includes(":") || !input.includes(",")) {
      throw new Error("구분자가 올바르지 않습니다.");
    }
  }
}

export default App;
