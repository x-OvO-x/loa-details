import { defineStore } from "pinia";

export type SessionData = {
  filename: string;
  encounterName: string;
  durationTs: number;
  duration: string;
  players: string[];
};

export type SessionInfo = {
  filename: string;
  date: Date;
  dateText: string;
  relativeTime: string;
  totalDurationTs: number;
  totalDuration: string;
  sessionEncounters: SessionData[];
};

export type ViewerState =
  | "loading"
  | "no-data"
  | "none"
  | "viewing-session"
  | "viewing-encounter"
  | "viewing-log";
type State = {
  viewerState: ViewerState;
  currentSessionName: string;
  currentEncounterName: string;
  players: string[];
  sessions: SessionInfo[];
  computedSessions: SessionInfo[];
  encounterOptions: string[];
  encounterFilter: string[];
  logfileFilter: string[];
  sessionsOrder: { label: "Newest" | "Oldest"; value: "desc" | "asc" };
  playersFilter: string[];
};

export const useLogViewerStore = defineStore("log-viewer", {
  state: (): State => ({
    viewerState: "loading",
    currentSessionName: "",
    currentEncounterName: "",
    players: [],
    sessions: [],
    computedSessions: [],
    encounterOptions: [],
    encounterFilter: [],
    logfileFilter: [],
    sessionsOrder: { label: "Newest", value: "desc" },
    playersFilter: [],
  }),
  actions: {
    resetState() {
      this.viewerState = "loading";
      this.currentSessionName = "";
      this.currentEncounterName = "";
      this.players = [];
      this.sessions = [];
      this.computedSessions = [];
      this.encounterOptions = [];
      this.encounterFilter = [];
      this.logfileFilter = [];
      this.sessionsOrder = { label: "Newest", value: "desc" };
      this.playersFilter = [];
    },
  },
});
