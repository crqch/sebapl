import {treaty} from '@elysiajs/eden'
import { appUrls } from 'shared'
import type {App} from "shared/eden"
import { authClient } from './auth-client';
import { readable } from 'svelte/store';

export const api = treaty<App>(appUrls.backend, {
  fetch: {
    credentials: "include",
  },
});

export const resolveError =  (
  error: unknown &
    (
      | { value: string }
      | {
          value: {
            message?: string;
          };
        }
    ),
  alternativeError?: string,
): string => {
  return typeof error.value === 'string'
    ? error.value
    : error.value.message || (alternativeError ?? 'Wystąpił nieznany błąd.');
}
