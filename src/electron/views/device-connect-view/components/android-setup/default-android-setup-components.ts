// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { AndroidSetupStepComponentProvider } from 'electron/views/device-connect-view/components/android-setup/android-setup-types';
import { DetectAdbStep } from 'electron/views/device-connect-view/components/android-setup/detect-adb-step';
import { DetectDevicesStep } from 'electron/views/device-connect-view/components/android-setup/detect-devices-step';
import { PromptLocateAdbStep } from 'electron/views/device-connect-view/components/android-setup/prompt-locate-adb-step';

export const defaultAndroidSetupComponents: AndroidSetupStepComponentProvider = {
    'detect-adb': DetectAdbStep,
    'detect-devices': DetectDevicesStep,
    'prompt-locate-adb': PromptLocateAdbStep,
};
