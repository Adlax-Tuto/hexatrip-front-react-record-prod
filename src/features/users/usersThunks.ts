import { localCustomFetch } from "@/axios/customFetch";
import { AsyncThunkConfig } from "@/store";
import { Profile, ProfileFormData } from "@/types/types";
import { GetThunkAPI } from "@reduxjs/toolkit";

export const updateUserThunk = async (
	{ data, id }: { data: ProfileFormData; id: string },
	thunkAPI: GetThunkAPI<AsyncThunkConfig>
): Promise<Profile | null> => {
	try {
		const { token } = thunkAPI.getState().usersSlice.token;
		const response = await localCustomFetch.patch<Profile>(`/profile/${id}`, { ...data }, { headers: { Authorization: `Bearer ${token}` } });
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const deleteUserThunk = async ({ id }: { id: string }, thunkAPI: GetThunkAPI<AsyncThunkConfig>): Promise<string | null> => {
	try {
		const { token } = thunkAPI.getState().usersSlice.token;
		const response = await localCustomFetch.delete<string>(`/profile/${id}`, { headers: { Authorization: `Bearer ${token}` } });
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
