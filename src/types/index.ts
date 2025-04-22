
export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  icon?: string;
}

export interface Timeline {
  id: string;
  title: string;
  description: string;
  events: TimelineEvent[];
  createdAt: string;
  updatedAt: string;
}

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  icon?: string;
  phase: string;
}

export interface JourneyMap {
  id: string;
  title: string;
  description: string;
  steps: JourneyStep[];
  createdAt: string;
  updatedAt: string;
}
