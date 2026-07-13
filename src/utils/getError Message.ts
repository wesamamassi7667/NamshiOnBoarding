import axios from 'axios'

export function getErrorMessage(error: unknown): string {
    if (axios.isAxiosError(error)) {
        // Timeout
        if (error.code === 'ECONNABORTED') {
            return 'Request timed out. Please try again.'
        }

        if (error.message === 'Network Error') {
            return 'No internet connection. Please check your connection and try again.'
        }

        if (error.response) {
            const status = error.response.status

            if (status >= 500) {
                return 'Server error. Please try again later.'
            }

            if (status === 404) {
                return 'Data not found.'
            }

            if (status >= 400) {
                return 'Something went wrong with the request.'
            }
        }
    }

    // Unexpected errors
    return 'Something went wrong. Please try again.'
}