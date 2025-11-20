/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

export interface Voter {
  id: string;
  name: string;
  surname: string;
  age: number;
  address: string;
  wardNumber: string;
  voterId: string;
}

export interface SearchVotersRequest {
  surname: string;
}

export interface SearchVotersResponse {
  success: boolean;
  data: Voter[];
  count: number;
  searchTerm: string;
}

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Mock voter database - represents parsed PDF data
 * In a real application, this would be loaded from a database
 */
export const mockVoterDatabase: Voter[] = [
  {
    id: "V001",
    name: "राज",
    surname: "शर्मा",
    age: 42,
    address: "वार्ड 5, मुंबई",
    wardNumber: "5",
    voterId: "MH001234",
  },
  {
    id: "V002",
    name: "प्रिया",
    surname: "शर्मा",
    age: 38,
    address: "वार्ड 5, मुंबई",
    wardNumber: "5",
    voterId: "MH001235",
  },
  {
    id: "V003",
    name: "अमित",
    surname: "पटेल",
    age: 35,
    address: "वार्ड 3, मुंबई",
    wardNumber: "3",
    voterId: "MH001236",
  },
  {
    id: "V004",
    name: "सुनीता",
    surname: "पटेल",
    age: 40,
    address: "वार्ड 3, मुंबई",
    wardNumber: "3",
    voterId: "MH001237",
  },
  {
    id: "V005",
    name: "विजय",
    surname: "भारती",
    age: 45,
    address: "वार्ड 7, मुंबई",
    wardNumber: "7",
    voterId: "MH001238",
  },
  {
    id: "V006",
    name: "रीता",
    surname: "भारती",
    age: 42,
    address: "वार्ड 7, मुंबई",
    wardNumber: "7",
    voterId: "MH001239",
  },
  {
    id: "V007",
    name: "राहुल",
    surname: "शर्मा",
    age: 28,
    address: "वार्ड 5, मुंबई",
    wardNumber: "5",
    voterId: "MH001240",
  },
  {
    id: "V008",
    name: "अंजली",
    surname: "गुप्ता",
    age: 33,
    address: "वार्ड 2, मुंबई",
    wardNumber: "2",
    voterId: "MH001241",
  },
  {
    id: "V009",
    name: "कार्तिक",
    surname: "गुप्ता",
    age: 37,
    address: "वार्ड 2, मुंबई",
    wardNumber: "2",
    voterId: "MH001242",
  },
  {
    id: "V010",
    name: "निशा",
    surname: "वर्मा",
    age: 31,
    address: "वार्ड 6, मुंबई",
    wardNumber: "6",
    voterId: "MH001243",
  },
  {
    id: "V011",
    name: "महेश",
    surname: "वर्मा",
    age: 46,
    address: "वार्ड 6, मुंबई",
    wardNumber: "6",
    voterId: "MH001244",
  },
  {
    id: "V012",
    name: "दिव्या",
    surname: "शर्मा",
    age: 29,
    address: "वार्ड 5, मुंबई",
    wardNumber: "5",
    voterId: "MH001245",
  },
  {
    id: "V013",
    name: "संजय",
    surname: "सिंह",
    age: 50,
    address: "वार्ड 8, मुंबई",
    wardNumber: "8",
    voterId: "MH001246",
  },
  {
    id: "V014",
    name: "कविता",
    surname: "सिंह",
    age: 47,
    address: "वार्ड 8, मुंबई",
    wardNumber: "8",
    voterId: "MH001247",
  },
  {
    id: "V015",
    name: "अरुण",
    surname: "पटेल",
    age: 41,
    address: "वार्ड 3, मुंबई",
    wardNumber: "3",
    voterId: "MH001248",
  },
];
