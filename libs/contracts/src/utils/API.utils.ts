import axios, { AxiosRequestConfig } from 'axios';
import * as https from 'https';

const agent = new https.Agent({ rejectUnauthorized: false });
const instance = axios.create({
  httpsAgent: agent,
});

// Hàm gọi API GET
export async function callGetApi(
  url: string,
  headers: AxiosRequestConfig['headers'],
) {
  try {
    const response = await instance.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error(`[BILL] API Upload phiếu thu Sinh viên lỗi:`, error.message);
    throw error;
  }
}

// Hàm gọi API POST
export async function callPostApi(
  url: string,
  data: any,
  headers: AxiosRequestConfig['headers'],
) {
  try {
    const response = await instance.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error(`[PAYMENT] API gạch nợ EDUSOFT lỗi:`, error.message);
    throw error;
  }
}

export async function callApiWithRetry(
  url,
  data,
  headers,
  maxRetries = 3,
  retryInterval = 5000,
) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await instance.post(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error(
        `[PAYMENT] API gạch nợ EDUSOFT lỗi, đang thực hiện retry...`,
      );
      retries++;
      await wait(retryInterval);
    }
  }

  throw new Error(`[PAYMENT] API gạch nợ EDUSOFT gặp lỗi sau nhiều lần retry.`);
}

// Hàm wait để đợi một khoảng thời gian
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
