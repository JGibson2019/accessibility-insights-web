// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as React from 'react';

import { NamedSFC } from '../react/named-sfc';

const d =
    'M1 15H3V16H0V0H8.71094L12.7109 4H13V10H12V5H8V1H1V15ZM11.2891 4L9 1.71094V4H11.2891ZM5.85156 11.8516L4.20312 13.5L5.85156 ' +
    '15.1484L5.14844 15.8516L2.79688 13.5L5.14844 11.1484L5.85156 11.8516ZM8.5 12C8.70833 12 8.90365 12.0391 9.08594 12.1172C9.26823 ' +
    '12.1953 9.42708 12.3021 9.5625 12.4375C9.69792 12.5729 9.80469 12.7318 9.88281 12.9141C9.96094 13.0964 10 13.2917 10 13.5C10 ' +
    '13.7083 9.96094 13.9036 9.88281 14.0859C9.80469 14.2682 9.69792 14.4271 9.5625 14.5625C9.42708 14.6979 9.26823 14.8047 9.08594 ' +
    '14.8828C8.90365 14.9609 8.70833 15 8.5 15C8.29167 15 8.09635 14.9609 7.91406 14.8828C7.73177 14.8047 7.57292 14.6979 7.4375 ' +
    '14.5625C7.30208 14.4271 7.19531 14.2682 7.11719 14.0859C7.03906 13.9036 7 13.7083 7 13.5C7 13.2917 7.03906 13.0964 7.11719 ' +
    '12.9141C7.19531 12.7318 7.30208 12.5729 7.4375 12.4375C7.57292 12.3021 7.73177 12.1953 7.91406 12.1172C8.09635 12.0391 8.29167 12 ' +
    '8.5 12ZM14.2031 13.5L11.8516 15.8516L11.1484 15.1484L12.7969 13.5L11.1484 11.8516L11.8516 11.1484L14.2031 13.5Z';

export const FileHTMLIcon = NamedSFC('FileHTMLIcon', () => (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <path d={d} />
    </svg>
));
