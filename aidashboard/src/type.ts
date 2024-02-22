export interface AiData {
    category_distribution: CategoryDistribution[];
    response_times: ResponseTimes;
  }
  
  export interface CategoryDistribution {
    name: string;
    value: number;
  }
  
  export interface ResponseTimes {
    day_wise: DayWise[];
    week_wise: WeekWise[];
  }
  
  export interface DayWise {
    date: string;
    average_time: number;
  }
  
  export interface WeekWise {
    week: string;
    average_time: number;
  }
  