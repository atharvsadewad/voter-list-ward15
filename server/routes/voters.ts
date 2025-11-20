import { RequestHandler } from "express";
import {
  SearchVotersResponse,
  mockVoterDatabase,
} from "@shared/api";

export const searchVoters: RequestHandler = (req, res) => {
  const { surname } = req.query;

  if (!surname || typeof surname !== "string") {
    return res.status(400).json({
      success: false,
      data: [],
      count: 0,
      searchTerm: "",
      message: "Surname is required",
    });
  }

  // Case-insensitive search
  const results = mockVoterDatabase.filter((voter) =>
    voter.surname.toLowerCase().includes(surname.toLowerCase())
  );

  const response: SearchVotersResponse = {
    success: true,
    data: results,
    count: results.length,
    searchTerm: surname,
  };

  res.status(200).json(response);
};
