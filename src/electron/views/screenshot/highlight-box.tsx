// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { NamedFC } from 'common/react/named-fc';
import { BoundingRectangle } from 'electron/platform/android/scan-results';
import { highlightBox, highlightBoxLabel } from 'electron/views/screenshot/highlight-box.scss';
import * as React from 'react';
import { CSSProperties } from 'react';

export interface HighlightBoxProps {
    boundingRectangle: BoundingRectangle;
}

export const HighlightBox = NamedFC<HighlightBoxProps>('HighlightBox', props => {
    const { boundingRectangle } = props;

    const width = boundingRectangle.right - boundingRectangle.left;
    const height = boundingRectangle.bottom - boundingRectangle.top;

    const boxStyles: CSSProperties = {
        width: `${1.1 * width}px`,
        height: `${1.1 * height}px`,
        top: `${0.98 * boundingRectangle.top}px`,
        left: `${0.9 * boundingRectangle.left}px`,
    };

    return (
        <div className={highlightBox} style={boxStyles} ariaHidden="true">
            <div className={highlightBoxLabel}>!</div>
        </div>
    );
});
