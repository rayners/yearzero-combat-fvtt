// ? scope: world (gm), client (player)
// ? config: true (visible)

import { CARD_STACK, MODULE_ID, SETTINGS_KEYS } from './constants.js';

export function registerSystemSettings() {

  game.settings.register(MODULE_ID, SETTINGS_KEYS.MIGRATION_VERSION, {
    name: 'Module Migration Version',
    scope: 'world',
    config: false,
    type: String,
    default: '0.0.0',
  });

  game.settings.register(MODULE_ID, CARD_STACK.INITIATIVE_DECK, {
    name: 'SETTINGS.InitiativeDeck',
    hint: 'SETTINGS.InitiativeDeckHint',
    scope: 'world',
    config: true,
    type: String,
    default: '',
  });

  game.settings.register(MODULE_ID, CARD_STACK.DISCARD_PILE, {
    name: 'SETTINGS.DiscardPile',
    hint: 'SETTINGS.DiscardPileHint',
    scope: 'world',
    config: true,
    type: String,
    default: '',
  });

  game.settings.register(MODULE_ID, SETTINGS_KEYS.INITIATIVE_AUTODRAW, {
    name: 'SETTINGS.AutoDraw',
    hint: 'SETTINGS.AutoDrawHint',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS_KEYS.INITIATIVE_RESET_DECK_ON_START, {
    name: 'SETTINGS.InitiativeResetDeckOnCombatStart',
    hint: 'SETTINGS.InitiativeResetDeckOnCombatStartHint',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS_KEYS.INITIATIVE_MESSAGING, {
    name: 'SETTINGS.InitiativeMessaging',
    hint: 'SETTINGS.InitiativeMessagingHint',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true,
  });

  game.settings.register(MODULE_ID, SETTINGS_KEYS.ACTOR_SPEED_ATTRIBUTE, {
    name: 'SETTINGS.ActorSpeedAttribute',
    hint: 'SETTINGS.ActorSpeedAttributeHint',
    scope: 'world',
    config: true,
    type: String,
    default: '',
  });
}
