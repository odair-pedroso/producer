import{Queues} from '../enums';
import BaseQueue from './base.queue'

export default class ConsoleQueue extends BaseQueue {
  private static instance: ConsoleQueue ;
  public static getInstance(): ConsoleQueue {
    if(!ConsoleQueue.instance){
      ConsoleQueue.instance = new ConsoleQueue();
    }
    return ConsoleQueue.instance;
  }
  private constructor(){
    super(Queues.log);
  }
}