import {
  getBlockAbove,
  getPluginType,
  KeyboardHandler,
} from '@udecode/plate-core';
import isHotkey from 'is-hotkey';
import { captionGlobalStore } from './captionGlobalStore';

export const getOnKeyDownCaption = (pluginKey: string): KeyboardHandler => (
  editor
) => (e) => {
  // focus caption from image
  if (isHotkey('down', e)) {
    const entry = getBlockAbove(editor, {
      match: { type: getPluginType(editor, pluginKey) },
    });
    if (!entry) return;

    captionGlobalStore.set.focusEndCaptionPath(entry[1]);
  }
};
