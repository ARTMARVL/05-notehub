import axios from 'axios';
import { type Note } from '../types/note';

const API_BASE_URL = 'https://notehub-public.goit.study/api';

export interface FetchNotesResponse {
  data: Note[];
  total: number;
  page: number;
  perPage: number;
}

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export const fetchNotes = async (_currentPage: number, _p0: number, _debouncedSearchQuery: string, params: FetchNotesParams = {}): Promise<FetchNotesResponse> => {
  const token = import.meta.env.VITE_NOTEHUB_TOKEN;
  const response = await axios.get<FetchNotesResponse>(`${API_BASE_URL}/notes`, {
    params: {
      page: params.page || 1,
      perPage: params.perPage || 12,
      search: params.search || undefined,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createNote = async (noteData: {
  title: string;
  content: string;
  tag: string;
}): Promise<Note> => {
  const token = import.meta.env.VITE_NOTEHUB_TOKEN;
  const response = await axios.post<Note>(`${API_BASE_URL}/notes`, noteData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const DeleteNote = async (id: string): Promise<Note> => {
  const token = import.meta.env.VITE_NOTEHUB_TOKEN;
  const response = await axios.delete<Note>(`${API_BASE_URL}/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};