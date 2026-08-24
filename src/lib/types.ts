/**
 * Core domain types for the Barcelona Mediterráneandwine experience.
 * Keeping these separate from presentation lets the quiz, scoring engine
 * and mock data evolve independently from the UI.
 */

export type WineType = "white" | "rose" | "red" | "cava";

export const WINE_TYPE_ORDER: WineType[] = ["white", "rose", "red", "cava"];

/** Static, editorial info about each of the four wine families we pour. */
export interface WineTypeInfo {
  id: WineType;
  label: string;
  labelEs: string;
  shortLabel: string;
  /** Approximate liquid colour used to render the bottle & glass. */
  liquidColor: string;
  liquidColorSoft: string;
  glassTint: string;
  accent: string;
}

/** One selectable answer inside a quiz question. */
export interface QuizOption {
  id: string;
  letter: string;
  label: string;
  /** Points this answer contributes to each wine type. Sparse on purpose. */
  scores: Partial<Record<WineType, number>>;
}

/** A single full-screen quiz question. Add/remove entries freely in the data file. */
export interface QuizQuestion {
  id: string;
  order: number;
  prompt: string;
  helper?: string;
  options: QuizOption[];
}

export type ScoreMap = Record<WineType, number>;

/** The rich "personality" content shown once a wine type wins the quiz. */
export interface WineResultProfile {
  type: WineType;
  personalityName: string;
  tagline: string;
  description: string;
  tastingNotes: string[];
  occasions: string[];
  pairing: string;
}

export interface SongDetails {
  title: string;
  artist: string;
  url: string;
}

export interface BottlePersonalization {
  photoDataUrl: string | null;
  photoName: string | null;
  song: SongDetails;
  message: string;
  recipientName: string;
}

export interface QuizAnswerRecord {
  questionId: string;
  optionId: string;
}

export interface BottleOrder {
  id: string;
  wineType: WineType;
  quantity: number;
  personalization: BottlePersonalization;
  createdAt: string;
  pricePerUnit: number;
}
