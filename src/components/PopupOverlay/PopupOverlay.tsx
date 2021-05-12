import React from 'react';

import { OverlayContainer } from './styles';

type Props = React.ComponentPropsWithoutRef<'div'>;

const PopupOverlay = ({ ...rest }: Props) => <OverlayContainer {...rest} />;

export { PopupOverlay };
