/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Create a default LoggerConfig for pino structured logging.
 *
 * @see https://cloud.google.com/logging/docs/structured-logging
 */
import * as pino from 'pino';
import { ServiceContext } from '@google-cloud/logging';
import * as gax from 'google-gax';
/**
 * Parameters for configuring GCP logging for Pino, allows specifying
 * serviceContext for Error Reporting.
 */
export interface GCPLoggingPinoOptions {
    /**
     * Optional details of service to be logged, and used in Cloud Error
     * Reporting.
     *
     * If specified, the {@link ServiceContext.service} name must be given.
     *
     * If not specified, a service name will be auto-detected from the
     * environment.
     *
     * @see https://cloud.google.com/error-reporting/docs/formatting-error-messages
     *
     */
    serviceContext?: ServiceContext;
    /**
     * Optional Google Cloud project ID to be used for composing the
     * 'logging.googleapis.com/trace' field.
     *
     * If not specified, the project ID will be auto-detected from the
     * environment.
     */
    traceGoogleCloudProjectId?: string;
    /**
     * Optional GoogleAuth - used to override defaults when detecting
     * ServiceContext and project ID from the environment.
     */
    auth?: gax.GoogleAuth;
}
/**
 * Creates a {@link pino.LoggerOptions} object which configures pino to output
 * JSON records compatible with
 * {@link https://cloud.google.com/logging/docs/structured-logging|Google Cloud structured Logging}.
 *
 * @param pinoLoggerOptions Additional Pino Logger settings that will be added to
 * the returned value.
 *
 * @example
 *      const logger = pino.pino(
 *        createGcpLoggingPinoConfig(
 *          {
 *            serviceContext: {
 *              service: 'my-service',
 *              version: '1.2.3',
 *            },
 *          },
 *          {
 *            // Set Pino log level to 'debug'.
 *            level: 'debug',
 *          }
 *        )
 *      );
 *
 *      logger.info('hello world');
 *      logger.error(err, 'failure: ' + err);
 */
export declare function createGcpLoggingPinoConfig(options?: GCPLoggingPinoOptions, pinoLoggerOptions?: pino.LoggerOptions): pino.LoggerOptions;
export declare const TEST_ONLY: {
    PINO_TO_GCP_LOG_LEVELS: Record<pino.pino.Level, string>;
};
