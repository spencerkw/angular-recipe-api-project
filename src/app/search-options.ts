//interface defining the possible options for a search
export interface SearchOptions {
  searchText: string;
  dietaryRestriction?: string;
  minCalories?: number;
  maxCalories?: number;
}
