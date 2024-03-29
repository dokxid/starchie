var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/api/applicationCommands.ts
import { makeURLSearchParams } from "@discordjs/rest";
import {
  Routes
} from "discord-api-types/v10";
var ApplicationCommandsAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "ApplicationCommandsAPI");
  }
  /**
   * Fetches all global commands for a application
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands}
   * @param applicationId - The application id to fetch commands for
   * @param query - The query options for fetching commands
   * @param options - The options for fetching commands
   */
  async getGlobalCommands(applicationId, query = {}, { signal } = {}) {
    return this.rest.get(Routes.applicationCommands(applicationId), {
      query: makeURLSearchParams(query),
      signal
    });
  }
  /**
   * Creates a new global command
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-global-application-command}
   * @param applicationId - The application id to create the command for
   * @param body - The data for creating the command
   * @param options - The options for creating the command
   */
  async createGlobalCommand(applicationId, body, { signal } = {}) {
    return this.rest.post(Routes.applicationCommands(applicationId), {
      body,
      signal
    });
  }
  /**
   * Fetches a global command
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-command}
   * @param applicationId - The application id to fetch the command from
   * @param commandId - The command id to fetch
   * @param options - The options for fetching the command
   */
  async getGlobalCommand(applicationId, commandId, { signal } = {}) {
    return this.rest.get(Routes.applicationCommand(applicationId, commandId), {
      signal
    });
  }
  /**
   * Edits a global command
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command}
   * @param applicationId - The application id of the command
   * @param commandId - The id of the command to edit
   * @param body - The data for editing the command
   * @param options - The options for editing the command
   */
  async editGlobalCommand(applicationId, commandId, body, { signal } = {}) {
    return this.rest.patch(Routes.applicationCommand(applicationId, commandId), {
      body,
      signal
    });
  }
  /**
   * Deletes a global command
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command}
   * @param applicationId - The application id of the command
   * @param commandId - The id of the command to delete
   * @param options - The options for deleting a command
   */
  async deleteGlobalCommand(applicationId, commandId, { signal } = {}) {
    await this.rest.delete(Routes.applicationCommand(applicationId, commandId), { signal });
  }
  /**
   * Overwrites global commands
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands}
   * @param applicationId - The application id to overwrite commands for
   * @param body - The data for overwriting commands
   * @param options - The options for overwriting commands
   */
  async bulkOverwriteGlobalCommands(applicationId, body, { signal } = {}) {
    return this.rest.put(Routes.applicationCommands(applicationId), {
      body,
      signal
    });
  }
  /**
   * Fetches all commands for a guild
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands}
   * @param applicationId - The application id to fetch commands for
   * @param guildId - The guild id to fetch commands for
   * @param query - The data for fetching commands
   * @param options - The options for fetching commands
   */
  async getGuildCommands(applicationId, guildId, query = {}, { signal } = {}) {
    return this.rest.get(Routes.applicationGuildCommands(applicationId, guildId), {
      query: makeURLSearchParams(query),
      signal
    });
  }
  /**
   * Creates a new command for a guild
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command}
   * @param applicationId - The application id to create the command for
   * @param guildId - The guild id to create the command for
   * @param body - The data for creating the command
   * @param options - The options for creating the command
   */
  async createGuildCommand(applicationId, guildId, body, { signal } = {}) {
    return this.rest.post(Routes.applicationGuildCommands(applicationId, guildId), {
      body,
      signal
    });
  }
  /**
   * Fetches a guild command
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command}
   * @param applicationId - The application id to fetch the command from
   * @param guildId - The guild id to fetch the command from
   * @param commandId - The command id to fetch
   * @param options - The options for fetching the command
   */
  async getGuildCommand(applicationId, guildId, commandId, { signal } = {}) {
    return this.rest.get(Routes.applicationGuildCommand(applicationId, guildId, commandId), {
      signal
    });
  }
  /**
   * Edits a guild command
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command}
   * @param applicationId - The application id of the command
   * @param guildId - The guild id of the command
   * @param commandId - The command id to edit
   * @param body - The data for editing the command
   * @param options - The options for editing the command
   */
  async editGuildCommand(applicationId, guildId, commandId, body, { signal } = {}) {
    return this.rest.patch(Routes.applicationGuildCommand(applicationId, guildId, commandId), {
      body,
      signal
    });
  }
  /**
   * Deletes a guild command
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command}
   * @param applicationId - The application id of the command
   * @param guildId - The guild id of the command
   * @param commandId - The id of the command to delete
   * @param options - The options for deleting the command
   */
  async deleteGuildCommand(applicationId, guildId, commandId, { signal } = {}) {
    await this.rest.delete(Routes.applicationGuildCommand(applicationId, guildId, commandId), { signal });
  }
  /**
   * Bulk overwrites guild commands
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands}
   * @param applicationId - The application id to overwrite commands for
   * @param guildId - The guild id to overwrite commands for
   * @param body - The data for overwriting commands
   * @param options - The options for overwriting the commands
   */
  async bulkOverwriteGuildCommands(applicationId, guildId, body, { signal } = {}) {
    return this.rest.put(Routes.applicationGuildCommands(applicationId, guildId), {
      body,
      signal
    });
  }
  /**
   * Fetches the permissions for a guild command
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions}
   * @param applicationId - The application id to get the permissions for
   * @param guildId - The guild id of the command
   * @param commandId - The command id to get the permissions for
   * @param options - The option for fetching the command
   */
  async getGuildCommandPermissions(applicationId, guildId, commandId, { signal } = {}) {
    return this.rest.get(Routes.applicationCommandPermissions(applicationId, guildId, commandId), {
      signal
    });
  }
  /**
   * Fetches all permissions for all commands in a guild
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions}
   * @param applicationId - The application id to get the permissions for
   * @param guildId - The guild id to get the permissions for
   * @param options - The options for fetching permissions
   */
  async getGuildCommandsPermissions(applicationId, guildId, { signal } = {}) {
    return this.rest.get(Routes.guildApplicationCommandsPermissions(applicationId, guildId), {
      signal
    });
  }
  /**
   * Edits the permissions for a guild command
   *
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions}
   * @param userToken - The token of the user to edit permissions on behalf of
   * @param applicationId - The application id to edit the permissions for
   * @param guildId - The guild id to edit the permissions for
   * @param commandId - The id of the command to edit the permissions for
   * @param body - The data for editing the permissions
   * @param options - The options for editing the permissions
   */
  async editGuildCommandPermissions(userToken, applicationId, guildId, commandId, body, { signal } = {}) {
    return this.rest.put(Routes.applicationCommandPermissions(applicationId, guildId, commandId), {
      headers: { Authorization: `Bearer ${userToken.replace("Bearer ", "")}` },
      auth: false,
      body,
      signal
    });
  }
};

// src/api/applications.ts
import {
  Routes as Routes2
} from "discord-api-types/v10";
var ApplicationsAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "ApplicationsAPI");
  }
  /**
   * Fetches the application associated with the requesting bot user.
   *
   * @see {@link https://discord.com/developers/docs/resources/application#get-current-application}
   * @param options - The options for fetching the application
   */
  async getCurrent({ signal } = {}) {
    return this.rest.get(Routes2.currentApplication(), { signal });
  }
  /**
   * Edits properties of the application associated with the requesting bot user.
   *
   * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application}
   * @param body - The new application data
   * @param options - The options for editing the application
   */
  async editCurrent(body, { signal } = {}) {
    return this.rest.patch(Routes2.currentApplication(), {
      body,
      signal
    });
  }
};

// src/api/channel.ts
import { makeURLSearchParams as makeURLSearchParams2 } from "@discordjs/rest";
import {
  Routes as Routes3
} from "discord-api-types/v10";
var ChannelsAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "ChannelsAPI");
  }
  /**
   * Sends a message in a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#create-message}
   * @param channelId - The id of the channel to send the message in
   * @param body - The data for sending the message
   * @param options - The options for sending the message
   */
  async createMessage(channelId, { files, ...body }, { signal } = {}) {
    return this.rest.post(Routes3.channelMessages(channelId), {
      files,
      body,
      signal
    });
  }
  /**
   * Edits a message
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#edit-message}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to edit
   * @param body - The data for editing the message
   * @param options - The options for editing the message
   */
  async editMessage(channelId, messageId, { files, ...body }, { signal } = {}) {
    return this.rest.patch(Routes3.channelMessage(channelId, messageId), {
      files,
      body,
      signal
    });
  }
  /**
   * Fetches the reactions for a message
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#get-reactions}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to get the reactions for
   * @param emoji - The emoji to get the reactions for
   * @param query - The query options for fetching the reactions
   * @param options - The options for fetching the message reactions
   */
  async getMessageReactions(channelId, messageId, emoji, query = {}, { signal } = {}) {
    return this.rest.get(Routes3.channelMessageReaction(channelId, messageId, encodeURIComponent(emoji)), {
      query: makeURLSearchParams2(query),
      signal
    });
  }
  /**
   * Deletes a reaction for the current user
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#delete-own-reaction}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to delete the reaction for
   * @param emoji - The emoji to delete the reaction for
   * @param options - The options for deleting the reaction
   */
  async deleteOwnMessageReaction(channelId, messageId, emoji, { signal } = {}) {
    await this.rest.delete(Routes3.channelMessageOwnReaction(channelId, messageId, encodeURIComponent(emoji)), {
      signal
    });
  }
  /**
   * Deletes a reaction for a user
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#delete-user-reaction}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to delete the reaction for
   * @param emoji - The emoji to delete the reaction for
   * @param userId - The id of the user to delete the reaction for
   * @param options - The options for deleting the reaction
   */
  async deleteUserMessageReaction(channelId, messageId, emoji, userId, { signal } = {}) {
    await this.rest.delete(Routes3.channelMessageUserReaction(channelId, messageId, encodeURIComponent(emoji), userId), {
      signal
    });
  }
  /**
   * Deletes all reactions for a message
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#delete-all-reactions}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to delete the reactions for
   * @param options - The options for deleting the reactions
   */
  async deleteAllMessageReactions(channelId, messageId, { signal } = {}) {
    await this.rest.delete(Routes3.channelMessageAllReactions(channelId, messageId), { signal });
  }
  /**
   * Deletes all reactions of an emoji for a message
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to delete the reactions for
   * @param emoji - The emoji to delete the reactions for
   * @param options - The options for deleting the reactions
   */
  async deleteAllMessageReactionsForEmoji(channelId, messageId, emoji, { signal } = {}) {
    await this.rest.delete(Routes3.channelMessageReaction(channelId, messageId, encodeURIComponent(emoji)), { signal });
  }
  /**
   * Adds a reaction to a message
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#create-reaction}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to add the reaction to
   * @param emoji - The emoji to add the reaction with
   * @param options - The options for adding the reaction
   */
  async addMessageReaction(channelId, messageId, emoji, { signal } = {}) {
    await this.rest.put(Routes3.channelMessageOwnReaction(channelId, messageId, encodeURIComponent(emoji)), { signal });
  }
  /**
   * Fetches a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#get-channel}
   * @param channelId - The id of the channel
   * @param options - The options for fetching the channel
   */
  async get(channelId, { signal } = {}) {
    return this.rest.get(Routes3.channel(channelId), { signal });
  }
  /**
   * Edits a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel}
   * @param channelId - The id of the channel to edit
   * @param body - The new channel data
   * @param options - The options for editing the channel
   */
  async edit(channelId, body, { signal } = {}) {
    return this.rest.patch(Routes3.channel(channelId), { body, signal });
  }
  /**
   * Deletes a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#deleteclose-channel}
   * @param channelId - The id of the channel to delete
   * @param options - The options for deleting the channel
   */
  async delete(channelId, { signal } = {}) {
    return this.rest.delete(Routes3.channel(channelId), { signal });
  }
  /**
   * Fetches the messages of a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-messages}
   * @param channelId - The id of the channel to fetch messages from
   * @param query - The query options for fetching messages
   * @param options - The options for fetching the messages
   */
  async getMessages(channelId, query = {}, { signal } = {}) {
    return this.rest.get(Routes3.channelMessages(channelId), {
      query: makeURLSearchParams2(query),
      signal
    });
  }
  /**
   * Shows a typing indicator in a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#trigger-typing-indicator}
   * @param channelId - The id of the channel to show the typing indicator in
   * @param options - The options for showing the typing indicator
   */
  async showTyping(channelId, { signal } = {}) {
    await this.rest.post(Routes3.channelTyping(channelId), { signal });
  }
  /**
   * Fetches the pinned messages of a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#get-pinned-messages}
   * @param channelId - The id of the channel to fetch pinned messages from
   * @param options - The options for fetching the pinned messages
   */
  async getPins(channelId, { signal } = {}) {
    return this.rest.get(Routes3.channelPins(channelId), { signal });
  }
  /**
   * Pins a message in a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#pin-message}
   * @param channelId - The id of the channel to pin the message in
   * @param messageId - The id of the message to pin
   * @param options - The options for pinning the message
   */
  async pinMessage(channelId, messageId, { reason, signal } = {}) {
    await this.rest.put(Routes3.channelPin(channelId, messageId), { reason, signal });
  }
  /**
   * Deletes a message
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#delete-message}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to delete
   * @param options - The options for deleting the message
   */
  async deleteMessage(channelId, messageId, { reason, signal } = {}) {
    await this.rest.delete(Routes3.channelMessage(channelId, messageId), { reason, signal });
  }
  /**
   * Bulk deletes messages
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#bulk-delete-messages}
   * @param channelId - The id of the channel the messages are in
   * @param messageIds - The ids of the messages to delete
   * @param options - The options for deleting the messages
   */
  async bulkDeleteMessages(channelId, messageIds, { reason, signal } = {}) {
    await this.rest.post(Routes3.channelBulkDelete(channelId), { reason, body: { messages: messageIds }, signal });
  }
  /**
   * Fetches a message
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-message}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to fetch
   * @param options - The options for fetching the message
   */
  async getMessage(channelId, messageId, { signal } = {}) {
    return this.rest.get(Routes3.channelMessage(channelId, messageId), {
      signal
    });
  }
  /**
   * Crossposts a message
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#crosspost-message}
   * @param channelId - The id of the channel the message is in
   * @param messageId - The id of the message to crosspost
   * @param options - The options for crossposting the message
   */
  async crosspostMessage(channelId, messageId, { signal } = {}) {
    return this.rest.post(Routes3.channelMessageCrosspost(channelId, messageId), {
      signal
    });
  }
  /**
   * Unpins a message in a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#unpin-message}
   * @param channelId - The id of the channel to unpin the message in
   * @param messageId - The id of the message to unpin
   * @param options - The options for unpinning the message
   */
  async unpinMessage(channelId, messageId, { reason, signal } = {}) {
    await this.rest.delete(Routes3.channelPin(channelId, messageId), { reason, signal });
  }
  /**
   * Follows an announcement channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#follow-announcement-channel}
   * @param channelId - The id of the announcement channel to follow
   * @param webhookChannelId - The id of the webhook channel to follow the announcements in
   * @param options - The options for following the announcement channel
   */
  async followAnnouncements(channelId, webhookChannelId, { signal } = {}) {
    return this.rest.post(Routes3.channelFollowers(channelId), {
      body: { webhook_channel_id: webhookChannelId },
      signal
    });
  }
  /**
   * Creates a new invite for a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#create-channel-invite}
   * @param channelId - The id of the channel to create an invite for
   * @param body - The data for creating the invite
   * @param options - The options for creating the invite
   */
  async createInvite(channelId, body, { reason, signal } = {}) {
    return this.rest.post(Routes3.channelInvites(channelId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Fetches the invites of a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-invites}
   * @param channelId - The id of the channel to fetch invites from
   * @param options - The options for fetching the invites
   */
  async getInvites(channelId, { signal } = {}) {
    return this.rest.get(Routes3.channelInvites(channelId), { signal });
  }
  /**
   * Creates a new thread
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-from-message}
   * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-without-message}
   * @param channelId - The id of the channel to start the thread in
   * @param body - The data for starting the thread
   * @param messageId - The id of the message to start the thread from
   * @param options - The options for starting the thread
   */
  async createThread(channelId, body, messageId, { signal } = {}) {
    return this.rest.post(Routes3.threads(channelId, messageId), {
      body,
      signal
    });
  }
  /**
   * Creates a new forum post
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-in-forum-channel}
   * @param channelId - The id of the forum channel to start the thread in
   * @param body - The data for starting the thread
   * @param options - The options for starting the thread
   */
  async createForumThread(channelId, { message, ...optionsBody }, { signal } = {}) {
    const { files, ...messageBody } = message;
    const body = {
      ...optionsBody,
      message: messageBody
    };
    return this.rest.post(Routes3.threads(channelId), { files, body, signal });
  }
  /**
   * Fetches the archived threads of a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads}
   * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads}
   * @param channelId - The id of the channel to fetch archived threads from
   * @param archivedStatus - The archived status of the threads to fetch
   * @param query - The options for fetching archived threads
   * @param options - The options for fetching archived threads
   */
  async getArchivedThreads(channelId, archivedStatus, query = {}, { signal } = {}) {
    return this.rest.get(Routes3.channelThreads(channelId, archivedStatus), {
      query: makeURLSearchParams2(query),
      signal
    });
  }
  /**
   * Fetches the private joined archived threads of a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads}
   * @param channelId - The id of the channel to fetch joined archived threads from
   * @param query - The options for fetching joined archived threads
   * @param options - The options for fetching joined archived threads
   */
  async getJoinedPrivateArchivedThreads(channelId, query = {}, { signal } = {}) {
    return this.rest.get(Routes3.channelJoinedArchivedThreads(channelId), {
      query: makeURLSearchParams2(query),
      signal
    });
  }
  /**
   * Creates a new webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook}
   * @param channelId - The id of the channel to create the webhook in
   * @param body - The data for creating the webhook
   * @param options - The options for creating the webhook
   */
  async createWebhook(channelId, body, { reason, signal } = {}) {
    return this.rest.post(Routes3.channelWebhooks(channelId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Fetches the webhooks of a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#get-channel-webhooks}
   * @param channelId - The id of the channel
   */
  async getWebhooks(channelId) {
    return this.rest.get(Routes3.channelWebhooks(channelId));
  }
  /**
   * Edits the permission overwrite for a user or role in a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#edit-channel-permissions}
   * @param channelId - The id of the channel to edit the permission overwrite in
   * @param overwriteId - The id of the user or role to edit the permission overwrite for
   * @param body - The data for editing the permission overwrite
   * @param options - The options for editing the permission overwrite
   */
  async editPermissionOverwrite(channelId, overwriteId, body, { reason, signal } = {}) {
    await this.rest.put(Routes3.channelPermission(channelId, overwriteId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Deletes the permission overwrite for a user or role in a channel
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#delete-channel-permission}
   * @param channelId - The id of the channel to delete the permission overwrite in
   * @param overwriteId - The id of the user or role to delete the permission overwrite for
   * @param options - The options for deleting the permission overwrite
   */
  async deletePermissionOverwrite(channelId, overwriteId, { reason, signal } = {}) {
    await this.rest.delete(Routes3.channelPermission(channelId, overwriteId), {
      reason,
      signal
    });
  }
};

// src/api/guild.ts
import { makeURLSearchParams as makeURLSearchParams3 } from "@discordjs/rest";
import {
  Routes as Routes4
} from "discord-api-types/v10";
var GuildsAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "GuildsAPI");
  }
  /**
   * Fetches a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild}
   * @param guildId - The id of the guild
   * @param options - The options for fetching the guild
   */
  async get(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guild(guildId), { signal });
  }
  /**
   * Fetches a guild preview
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-preview}
   * @param guildId - The id of the guild to fetch the preview from
   * @param options - The options for fetching the guild preview
   */
  async getPreview(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildPreview(guildId), {
      signal
    });
  }
  /**
   * Creates a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#create-guild}
   * @param body - The guild to create
   * @param options - The options for creating the guild
   */
  async create(body, { signal } = {}) {
    return this.rest.post(Routes4.guilds(), { body, signal });
  }
  /**
   * Edits a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild}
   * @param guildId - The id of the guild to edit
   * @param body - The new guild data
   * @param options - The options for editing the guild
   */
  async edit(guildId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guild(guildId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Deletes a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild}
   * @param guildId - The id of the guild to delete
   * @param options - The options for deleting this guild
   */
  async delete(guildId, { signal, reason } = {}) {
    await this.rest.delete(Routes4.guild(guildId), { reason, signal });
  }
  /**
   * Adds user to the guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member}
   * @param guildId - The id of the guild to add the user to
   * @param userId - The id of the user to add
   * @param body - The data for adding users to the guild
   * @param options - The options for adding users to the guild
   */
  async addMember(guildId, userId, body, { signal } = {}) {
    return this.rest.put(Routes4.guildMember(guildId, userId), {
      body,
      signal
    });
  }
  /**
   * Fetches all the members of a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#list-guild-members}
   * @param guildId - The id of the guild
   * @param query - The query for fetching the guild members
   * @param options - The options for fetching the guild members
   */
  async getMembers(guildId, query = {}, { signal } = {}) {
    return this.rest.get(Routes4.guildMembers(guildId), {
      query: makeURLSearchParams3(query),
      signal
    });
  }
  /**
   * Fetches a guild's channels
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-channels}
   * @param guildId - The id of the guild to fetch the channels from
   * @param options - The options for fetching the guild channels
   */
  async getChannels(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildChannels(guildId), {
      signal
    });
  }
  /**
   * Creates a guild channel
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-channel}
   * @param guildId - The id of the guild to create the channel in
   * @param body - The data to create the new channel
   * @param options - The options for creating the guild channel
   */
  async createChannel(guildId, body, { reason, signal } = {}) {
    return this.rest.post(Routes4.guildChannels(guildId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Edits a guild channel's positions
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions}
   * @param guildId - The id of the guild to edit the channel positions from
   * @param body - The data to edit the channel positions with
   * @param options - The options for editing the guild channel positions
   */
  async setChannelPositions(guildId, body, { reason, signal } = {}) {
    await this.rest.patch(Routes4.guildChannels(guildId), { reason, body, signal });
  }
  /**
   * Fetches the active threads in a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#list-active-guild-threads}
   * @param guildId - The id of the guild to fetch the active threads from
   * @param options - The options for fetching the active threads
   */
  async getActiveThreads(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildActiveThreads(guildId), { signal });
  }
  /**
   * Fetches a guild member ban
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-ban}
   * @param guildId - The id of the guild to fetch the ban from
   * @param userId - The id of the user to fetch the ban
   * @param options - The options for fetching the ban
   */
  async getMemberBan(guildId, userId, { signal } = {}) {
    return this.rest.get(Routes4.guildBan(guildId, userId), { signal });
  }
  /**
   * Fetches guild member bans
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-bans}
   * @param guildId - The id of the guild to fetch the bans from
   * @param query - The query options for fetching the bans
   * @param options - The options for fetching the bans
   */
  async getMemberBans(guildId, query = {}, { signal } = {}) {
    return this.rest.get(Routes4.guildBans(guildId), {
      query: makeURLSearchParams3(query),
      signal
    });
  }
  /**
   * Bans a user from a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-ban}
   * @param guildId - The id of the guild to ban the member in
   * @param userId - The id of the user to ban
   * @param body - The payload for banning the user
   * @param options - The options for banning the user
   */
  async banUser(guildId, userId, body = {}, { reason, signal } = {}) {
    await this.rest.put(Routes4.guildBan(guildId, userId), { reason, body, signal });
  }
  /**
   * Unbans a user from a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-ban}
   * @param guildId - The id of the guild to unban the member in
   * @param userId - The id of the user to unban
   * @param options - The options for unbanning the user
   */
  async unbanUser(guildId, userId, { reason, signal } = {}) {
    await this.rest.delete(Routes4.guildBan(guildId, userId), { reason, signal });
  }
  /**
   * Gets all the roles in a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-roles}
   * @param guildId - The id of the guild to fetch the roles from
   * @param options - The options for fetching the guild roles
   */
  async getRoles(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildRoles(guildId), { signal });
  }
  /**
   * Creates a guild role
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-role}
   * @param guildId - The id of the guild to create the role in
   * @param body - The data to create the role with
   * @param options - The options for creating the guild role
   */
  async createRole(guildId, body, { reason, signal } = {}) {
    return this.rest.post(Routes4.guildRoles(guildId), { reason, body, signal });
  }
  /**
   * Sets role positions in a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-positions}
   * @param guildId - The id of the guild to set role positions for
   * @param body - The data for setting a role position
   * @param options - The options for setting role positions
   */
  async setRolePositions(guildId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guildRoles(guildId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Edits a guild role
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role}
   * @param guildId - The id of the guild to edit the role in
   * @param roleId - The id of the role to edit
   * @param body - data for editing the role
   * @param options - The options for editing the guild role
   */
  async editRole(guildId, roleId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guildRole(guildId, roleId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Deletes a guild role
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-role}
   * @param guildId - The id of the guild to delete the role in
   * @param roleId - The id of the role to delete
   * @param options - The options for deleting the guild role
   */
  async deleteRole(guildId, roleId, { reason, signal } = {}) {
    await this.rest.delete(Routes4.guildRole(guildId, roleId), { reason, signal });
  }
  /**
   * Edits the multi-factor-authentication (MFA) level of a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level}
   * @param guildId - The id of the guild to edit the MFA level for
   * @param level - The new MFA level
   * @param options - The options for editing the MFA level
   */
  async editMFALevel(guildId, level, { reason, signal } = {}) {
    return this.rest.post(Routes4.guildMFA(guildId), {
      reason,
      signal,
      body: { level }
    });
  }
  /**
   * Fetch the number of members that can be pruned from a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-prune-count}
   * @param guildId - The id of the guild to fetch the number of pruned members from
   * @param query - The query options for fetching the number of pruned members
   * @param options - The options for fetching the number of pruned members
   */
  async getPruneCount(guildId, query = {}, { signal } = {}) {
    return this.rest.get(Routes4.guildPrune(guildId), {
      signal,
      query: makeURLSearchParams3(query)
    });
  }
  /**
   * Prunes members in a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#begin-guild-prune}
   * @param guildId - The id of the guild to prune members in
   * @param body - The options for pruning members
   * @param options - The options for initiating the prune
   */
  async beginPrune(guildId, body = {}, { reason, signal } = {}) {
    return this.rest.post(Routes4.guildPrune(guildId), {
      body,
      reason,
      signal
    });
  }
  /**
   * Fetches voice regions for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-voice-regions}
   * @param guildId - The id of the guild to fetch the voice regions from
   * @param options - The options for fetching the voice regions
   */
  async getVoiceRegions(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildVoiceRegions(guildId), { signal });
  }
  /**
   * Fetches the invites for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-invites}
   * @param guildId - The id of the guild to fetch the invites from
   * @param options - The options for fetching the invites
   */
  async getInvites(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildInvites(guildId), { signal });
  }
  /**
   * Fetches the integrations for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-integrations}
   * @param guildId - The id of the guild to fetch the integrations from
   * @param options - The options for fetching the integrations
   */
  async getIntegrations(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildIntegrations(guildId), { signal });
  }
  /**
   * Deletes an integration from a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-integration}
   * @param guildId - The id of the guild to delete the integration from
   * @param integrationId - The id of the integration to delete
   * @param options - The options for deleting the integration
   */
  async deleteIntegration(guildId, integrationId, { reason, signal } = {}) {
    await this.rest.delete(Routes4.guildIntegration(guildId, integrationId), { reason, signal });
  }
  /**
   * Fetches the widget settings for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-settings}
   * @param guildId - The id of the guild to fetch the widget settings from
   * @param options - The options for fetching the widget settings
   */
  async getWidgetSettings(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildWidgetSettings(guildId), {
      signal
    });
  }
  /**
   * Edits the widget settings for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-widget}
   * @param guildId - The id of the guild to edit the widget settings from
   * @param body - The new widget settings data
   * @param options - The options for editing the widget settings
   */
  async editWidgetSettings(guildId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guildWidgetSettings(guildId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Fetches the widget for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget}
   * @param guildId - The id of the guild to fetch the widget from
   * @param options - The options for fetching the widget
   */
  async getWidget(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildWidgetJSON(guildId), { signal });
  }
  /**
   * Fetches the vanity url for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-vanity-url}
   * @param guildId - The id of the guild to fetch the vanity url from
   * @param options - The options for fetching the vanity url
   */
  async getVanityURL(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildVanityUrl(guildId), { signal });
  }
  /**
   * Fetches the widget image for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-image}
   * @param guildId - The id of the guild to fetch the widget image from
   * @param style - The style of the widget image
   * @param options - The options for fetching the widget image
   */
  async getWidgetImage(guildId, style, { signal } = {}) {
    return this.rest.get(Routes4.guildWidgetImage(guildId), {
      query: makeURLSearchParams3({ style }),
      signal
    });
  }
  /**
   * Fetches the welcome screen for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen}
   * @param guildId - The id of the guild to fetch the welcome screen from
   * @param options - The options for fetching the welcome screen
   */
  async getWelcomeScreen(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildWelcomeScreen(guildId), { signal });
  }
  /**
   * Edits the welcome screen for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen}
   * @param guildId - The id of the guild to edit the welcome screen for
   * @param body - The new welcome screen data
   * @param options - The options for editing the welcome screen
   */
  async editWelcomeScreen(guildId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guildWelcomeScreen(guildId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Edits a user's voice state in a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-user-voice-state}
   * @param guildId - The id of the guild to edit the current user's voice state in
   * @param userId - The id of the user to edit the voice state for
   * @param body - The data for editing the voice state
   * @param options - The options for editing the voice state
   */
  async editUserVoiceState(guildId, userId, body, { reason, signal } = {}) {
    await this.rest.patch(Routes4.guildVoiceState(guildId, userId), { reason, body, signal });
  }
  /**
   * Fetches all emojis for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/emoji#list-guild-emojis}
   * @param guildId - The id of the guild to fetch the emojis from
   * @param options - The options for fetching the emojis
   */
  async getEmojis(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildEmojis(guildId), { signal });
  }
  /**
   * Fetches an emoji for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/emoji#get-guild-emoji}
   * @param guildId - The id of the guild to fetch the emoji from
   * @param emojiId - The id of the emoji to fetch
   * @param options - The options for fetching the emoji
   */
  async getEmoji(guildId, emojiId, { signal } = {}) {
    return this.rest.get(Routes4.guildEmoji(guildId, emojiId), { signal });
  }
  /**
   * Creates a new emoji for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji}
   * @param guildId - The id of the guild to create the emoji from
   * @param body - The data for creating the emoji
   * @param options - The options for creating the emoji
   */
  async createEmoji(guildId, body, { reason, signal } = {}) {
    return this.rest.post(Routes4.guildEmojis(guildId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Edits an emoji for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji}
   * @param guildId - The id of the guild to edit the emoji from
   * @param emojiId - The id of the emoji to edit
   * @param body - The data for editing the emoji
   * @param options - The options for editing the emoji
   */
  async editEmoji(guildId, emojiId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guildEmoji(guildId, emojiId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Deletes an emoji for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/emoji#delete-guild-emoji}
   * @param guildId - The id of the guild to delete the emoji from
   * @param emojiId - The id of the emoji to delete
   * @param options - The options for deleting the emoji
   */
  async deleteEmoji(guildId, emojiId, { reason, signal } = {}) {
    await this.rest.delete(Routes4.guildEmoji(guildId, emojiId), { reason, signal });
  }
  /**
   * Fetches all scheduled events for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild}
   * @param guildId - The id of the guild to fetch the scheduled events from
   * @param query - The query options for fetching the scheduled events
   * @param options - The options for fetching the scheduled events
   */
  async getScheduledEvents(guildId, query = {}, { signal } = {}) {
    return this.rest.get(Routes4.guildScheduledEvents(guildId), {
      query: makeURLSearchParams3(query),
      signal
    });
  }
  /**
   * Creates a new scheduled event for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event}
   * @param guildId - The id of the guild to create the scheduled event from
   * @param body - The data to create the event with
   * @param options - The options for creating the scheduled event
   */
  async createScheduledEvent(guildId, body, { reason, signal } = {}) {
    return this.rest.post(Routes4.guildScheduledEvents(guildId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Fetches a scheduled event for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event}
   * @param guildId - The id of the guild to fetch the scheduled event from
   * @param eventId - The id of the scheduled event to fetch
   * @param query - The options for fetching the scheduled event
   * @param options - The options for fetching the scheduled event
   */
  async getScheduledEvent(guildId, eventId, query = {}, { signal } = {}) {
    return this.rest.get(Routes4.guildScheduledEvent(guildId, eventId), {
      query: makeURLSearchParams3(query),
      signal
    });
  }
  /**
   * Edits a scheduled event for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event}
   * @param guildId - The id of the guild to edit the scheduled event from
   * @param eventId - The id of the scheduled event to edit
   * @param body - The new event data
   * @param options - The options for editing the scheduled event
   */
  async editScheduledEvent(guildId, eventId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guildScheduledEvent(guildId, eventId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Deletes a scheduled event for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event}
   * @param guildId - The id of the guild to delete the scheduled event from
   * @param eventId - The id of the scheduled event to delete
   * @param options - The options for deleting the scheduled event
   */
  async deleteScheduledEvent(guildId, eventId, { reason, signal } = {}) {
    await this.rest.delete(Routes4.guildScheduledEvent(guildId, eventId), { reason, signal });
  }
  /**
   * Gets all users that are interested in a scheduled event
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users}
   * @param guildId - The id of the guild to fetch the scheduled event users from
   * @param eventId - The id of the scheduled event to fetch the users for
   * @param query - The options for fetching the scheduled event users
   * @param options - The options for fetching the scheduled event users
   */
  async getScheduledEventUsers(guildId, eventId, query = {}, { signal } = {}) {
    return this.rest.get(Routes4.guildScheduledEventUsers(guildId, eventId), {
      query: makeURLSearchParams3(query),
      signal
    });
  }
  /**
   * Fetches all the templates for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-template#get-guild-templates}
   * @param guildId - The id of the guild to fetch the templates from
   * @param options - The options for fetching the templates
   */
  async getTemplates(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildTemplates(guildId), { signal });
  }
  /**
   * Syncs a template for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-template#sync-guild-template}
   * @param guildId - The id of the guild to sync the template from
   * @param templateCode - The code of the template to sync
   * @param options - The options for syncing the template
   */
  async syncTemplate(guildId, templateCode, { signal } = {}) {
    return this.rest.put(Routes4.guildTemplate(guildId, templateCode), {
      signal
    });
  }
  /**
   * Edits a template for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-template#modify-guild-template}
   * @param guildId - The id of the guild to edit the template from
   * @param templateCode - The code of the template to edit
   * @param body - The data for editing the template
   * @param options - The options for editing the template
   */
  async editTemplate(guildId, templateCode, body, { signal } = {}) {
    return this.rest.patch(Routes4.guildTemplate(guildId, templateCode), {
      body,
      signal
    });
  }
  /**
   * Deletes a template for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-template#delete-guild-template}
   * @param guildId - The id of the guild to delete the template from
   * @param templateCode - The code of the template to delete
   * @param options - The options for deleting the template
   */
  async deleteTemplate(guildId, templateCode, { signal } = {}) {
    await this.rest.delete(Routes4.guildTemplate(guildId, templateCode), { signal });
  }
  /**
   * Fetches all the stickers for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/sticker#list-guild-stickers}
   * @param guildId - The id of the guild to fetch the stickers from
   * @param options - The options for fetching the stickers
   */
  async getStickers(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildStickers(guildId), { signal });
  }
  /**
   * Fetches a sticker for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/sticker#get-guild-sticker}
   * @param guildId - The id of the guild to fetch the sticker from
   * @param stickerId - The id of the sticker to fetch
   * @param options - The options for fetching the sticker
   */
  async getSticker(guildId, stickerId, { signal } = {}) {
    return this.rest.get(Routes4.guildSticker(guildId, stickerId), { signal });
  }
  /**
   * Creates a sticker for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker}
   * @param guildId - The id of the guild to create the sticker for
   * @param body - The data for creating the sticker
   * @param options - The options for creating the sticker
   */
  async createSticker(guildId, { file, ...body }, { reason, signal } = {}) {
    const fileData = { ...file, key: "file" };
    return this.rest.post(Routes4.guildStickers(guildId), {
      appendToFormData: true,
      body,
      files: [fileData],
      reason,
      signal
    });
  }
  /**
   * Edits a sticker for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker}
   * @param guildId - The id of the guild to edit the sticker from
   * @param stickerId - The id of the sticker to edit
   * @param body - The data for editing the sticker
   * @param options - The options for editing the sticker
   */
  async editSticker(guildId, stickerId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guildSticker(guildId, stickerId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Deletes a sticker for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/sticker#delete-guild-sticker}
   * @param guildId - The id of the guild to delete the sticker from
   * @param stickerId - The id of the sticker to delete
   * @param options - The options for deleting the sticker
   */
  async deleteSticker(guildId, stickerId, { reason, signal } = {}) {
    await this.rest.delete(Routes4.guildSticker(guildId, stickerId), { reason, signal });
  }
  /**
   * Fetches the audit logs for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log}
   * @param guildId - The id of the guild to fetch the audit logs from
   * @param query - The query options for fetching the audit logs
   * @param options - The options for fetching the audit logs
   */
  async getAuditLogs(guildId, query = {}, { signal } = {}) {
    return this.rest.get(Routes4.guildAuditLog(guildId), {
      query: makeURLSearchParams3(query),
      signal
    });
  }
  /**
   * Fetches all auto moderation rules for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild}
   * @param guildId - The id of the guild to fetch the auto moderation rules from
   * @param options - The options for fetching the auto moderation rules
   */
  async getAutoModerationRules(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildAutoModerationRules(guildId), {
      signal
    });
  }
  /**
   * Fetches an auto moderation rule for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule}
   * @param guildId - The id of the guild to fetch the auto moderation rule from
   * @param ruleId - The id of the auto moderation rule to fetch
   * @param options - The options for fetching the auto moderation rule
   */
  async getAutoModerationRule(guildId, ruleId, { signal } = {}) {
    return this.rest.get(Routes4.guildAutoModerationRule(guildId, ruleId), {
      signal
    });
  }
  /**
   * Creates a new auto moderation rule for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule}
   * @param guildId - The id of the guild to create the auto moderation rule from
   * @param body - The data for creating the auto moderation rule
   * @param options - The options for creating the auto moderation rule
   */
  async createAutoModerationRule(guildId, body, { reason, signal } = {}) {
    return this.rest.post(Routes4.guildAutoModerationRules(guildId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Edits an auto moderation rule for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule}
   * @param guildId - The id of the guild to edit the auto moderation rule from
   * @param ruleId - The id of the auto moderation rule to edit
   * @param body - The data for editing the auto moderation rule
   * @param options - The options for editing the auto moderation rule
   */
  async editAutoModerationRule(guildId, ruleId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guildAutoModerationRule(guildId, ruleId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Deletes an auto moderation rule for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule}
   * @param guildId - The id of the guild to delete the auto moderation rule from
   * @param ruleId - The id of the auto moderation rule to delete
   * @param options - The options for deleting the auto moderation rule
   */
  async deleteAutoModerationRule(guildId, ruleId, { reason, signal } = {}) {
    await this.rest.delete(Routes4.guildAutoModerationRule(guildId, ruleId), { reason, signal });
  }
  /**
   * Fetches a guild member
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-member}
   * @param guildId - The id of the guild
   * @param userId - The id of the user
   * @param options - The options for fetching the guild member
   */
  async getMember(guildId, userId, { signal } = {}) {
    return this.rest.get(Routes4.guildMember(guildId, userId), { signal });
  }
  /**
   * Searches for guild members
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#search-guild-members}
   * @param guildId - The id of the guild to search in
   * @param query - The query to search for
   * @param options - The options for searching for guild members
   */
  async searchForMembers(guildId, query, { signal } = {}) {
    return this.rest.get(Routes4.guildMembersSearch(guildId), {
      query: makeURLSearchParams3(query),
      signal
    });
  }
  /**
   * Edits a guild member
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-member}
   * @param guildId - The id of the guild
   * @param userId - The id of the user
   * @param body - The data for editing the guild member
   * @param options - The options for editing the guild member
   */
  async editMember(guildId, userId, body = {}, { reason, signal } = {}) {
    return this.rest.patch(Routes4.guildMember(guildId, userId), {
      reason,
      body,
      signal
    });
  }
  /**
   * Removes a member from a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member}
   * @param guildId - The id of the guild
   * @param userId - The id of the user
   * @param options - The options for removing the guild member
   */
  async removeMember(guildId, userId, { reason, signal } = {}) {
    return this.rest.delete(Routes4.guildMember(guildId, userId), { reason, signal });
  }
  /**
   * Adds a role to a guild member
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member-role}
   * @param guildId - The id of the guild
   * @param userId - The id of the user
   * @param roleId - The id of the role
   * @param options - The options for adding a role to a guild member
   */
  async addRoleToMember(guildId, userId, roleId, { reason, signal } = {}) {
    await this.rest.put(Routes4.guildMemberRole(guildId, userId, roleId), { reason, signal });
  }
  /**
   * Removes a role from a guild member
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member-role}
   * @param guildId - The id of the guild
   * @param userId - The id of the user
   * @param roleId - The id of the role
   * @param options - The options for removing a role from a guild member
   */
  async removeRoleFromMember(guildId, userId, roleId, { reason, signal } = {}) {
    await this.rest.delete(Routes4.guildMemberRole(guildId, userId, roleId), { reason, signal });
  }
  /**
   * Fetches a guild template
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-template#get-guild-template}
   * @param templateCode - The code of the template
   * @param options - The options for fetching the guild template
   */
  async getTemplate(templateCode, { signal } = {}) {
    return this.rest.get(Routes4.template(templateCode), { signal });
  }
  /**
   * Creates a new template
   *
   * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-template}
   * @param templateCode - The code of the template
   * @param body - The data for creating the template
   * @param options - The options for creating the template
   */
  async createTemplate(templateCode, body, { signal } = {}) {
    return this.rest.post(Routes4.template(templateCode), { body, signal });
  }
  /**
   * Fetches webhooks for a guild
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#get-guild-webhooks}
   * @param id - The id of the guild
   */
  async getWebhooks(id) {
    return this.rest.get(Routes4.guildWebhooks(id));
  }
  /**
   * Sets the voice state for the current user
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state}
   * @param guildId - The id of the guild
   * @param body - The options for setting the voice state
   */
  async setVoiceState(guildId, body = {}) {
    return this.rest.patch(Routes4.guildVoiceState(guildId, "@me"), {
      body
    });
  }
  /**
   * Fetches a guild onboarding
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-onboarding}
   * @param guildId - The id of the guild
   * @param options - The options for fetching the guild onboarding
   */
  async getOnboarding(guildId, { signal } = {}) {
    return this.rest.get(Routes4.guildOnboarding(guildId), { signal });
  }
  /**
   * Edits a guild onboarding
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-onboarding}
   * @param guildId - The id of the guild
   * @param body - The data for editing the guild onboarding
   * @param options - The options for editing the guild onboarding
   */
  async editOnboarding(guildId, body, { reason, signal } = {}) {
    return this.rest.put(Routes4.guildOnboarding(guildId), {
      reason,
      body,
      signal
    });
  }
};

// src/api/interactions.ts
import { InteractionResponseType, Routes as Routes5 } from "discord-api-types/v10";
var InteractionsAPI = class {
  constructor(rest, webhooks) {
    this.rest = rest;
    this.webhooks = webhooks;
  }
  static {
    __name(this, "InteractionsAPI");
  }
  /**
   * Replies to an interaction
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
   * @param interactionId - The id of the interaction
   * @param interactionToken - The token of the interaction
   * @param body - The callback data for replying
   * @param options - The options for replying
   */
  async reply(interactionId, interactionToken, { files, ...data }, { signal } = {}) {
    await this.rest.post(Routes5.interactionCallback(interactionId, interactionToken), {
      files,
      auth: false,
      body: {
        type: InteractionResponseType.ChannelMessageWithSource,
        data
      },
      signal
    });
  }
  /**
   * Defers the reply to an interaction
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
   * @param interactionId - The id of the interaction
   * @param interactionToken - The token of the interaction
   * @param data - The data for deferring the reply
   * @param options - The options for deferring
   */
  async defer(interactionId, interactionToken, data, { signal } = {}) {
    await this.rest.post(Routes5.interactionCallback(interactionId, interactionToken), {
      auth: false,
      body: {
        type: InteractionResponseType.DeferredChannelMessageWithSource,
        data
      },
      signal
    });
  }
  /**
   * Defers an update from a message component interaction
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
   * @param interactionId - The id of the interaction
   * @param interactionToken - The token of the interaction
   * @param options - The options for deferring
   */
  async deferMessageUpdate(interactionId, interactionToken, { signal } = {}) {
    await this.rest.post(Routes5.interactionCallback(interactionId, interactionToken), {
      auth: false,
      body: {
        type: InteractionResponseType.DeferredMessageUpdate
      },
      signal
    });
  }
  /**
   * Reply to a deferred interaction
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message}
   * @param applicationId - The application id of the interaction
   * @param interactionToken - The token of the interaction
   * @param body - The callback data for replying
   * @param options - The options for replying
   */
  async followUp(applicationId, interactionToken, body, { signal } = {}) {
    return this.webhooks.execute(applicationId, interactionToken, { ...body, wait: true }, { signal });
  }
  /**
   * Edits the initial reply to an interaction
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response}
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message}
   * @param applicationId - The application id of the interaction
   * @param interactionToken - The token of the interaction
   * @param callbackData - The callback data for editing the reply
   * @param messageId - The id of the message to edit. If omitted, the original reply will be edited
   * @param options - The options for editing the reply
   */
  async editReply(applicationId, interactionToken, callbackData, messageId, { signal } = {}) {
    return this.webhooks.editMessage(applicationId, interactionToken, messageId ?? "@original", callbackData, {
      signal
    });
  }
  /**
   * Fetches the initial reply to an interaction
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#get-original-interaction-response}
   * @param applicationId - The application id of the interaction
   * @param interactionToken - The token of the interaction
   * @param options - The options for fetching the reply
   */
  async getOriginalReply(applicationId, interactionToken, { signal } = {}) {
    return this.webhooks.getMessage(
      applicationId,
      interactionToken,
      "@original",
      {},
      { signal }
    );
  }
  /**
   * Deletes the initial reply to an interaction
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-original-interaction-response}
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-followup-message}
   * @param applicationId - The application id of the interaction
   * @param interactionToken - The token of the interaction
   * @param messageId - The id of the message to delete. If omitted, the original reply will be deleted
   * @param options - The options for deleting the reply
   */
  async deleteReply(applicationId, interactionToken, messageId, { signal } = {}) {
    await this.webhooks.deleteMessage(applicationId, interactionToken, messageId ?? "@original", {}, { signal });
  }
  /**
   * Updates the the message the component interaction was triggered on
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
   * @param interactionId - The id of the interaction
   * @param interactionToken - The token of the interaction
   * @param callbackData - The callback data for updating the interaction
   * @param options - The options for updating the interaction
   */
  async updateMessage(interactionId, interactionToken, { files, ...data }, { signal } = {}) {
    await this.rest.post(Routes5.interactionCallback(interactionId, interactionToken), {
      files,
      auth: false,
      body: {
        type: InteractionResponseType.UpdateMessage,
        data
      },
      signal
    });
  }
  /**
   * Sends an autocomplete response to an interaction
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
   * @param interactionId - The id of the interaction
   * @param interactionToken - The token of the interaction
   * @param callbackData - The callback data for the autocomplete response
   * @param options - The options for sending the autocomplete response
   */
  async createAutocompleteResponse(interactionId, interactionToken, callbackData, { signal } = {}) {
    await this.rest.post(Routes5.interactionCallback(interactionId, interactionToken), {
      auth: false,
      body: {
        type: InteractionResponseType.ApplicationCommandAutocompleteResult,
        data: callbackData
      },
      signal
    });
  }
  /**
   * Sends a modal response to an interaction
   *
   * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
   * @param interactionId - The id of the interaction
   * @param interactionToken - The token of the interaction
   * @param callbackData - The modal callback data to send
   * @param options - The options for sending the modal
   */
  async createModal(interactionId, interactionToken, callbackData, { signal } = {}) {
    await this.rest.post(Routes5.interactionCallback(interactionId, interactionToken), {
      auth: false,
      body: {
        type: InteractionResponseType.Modal,
        data: callbackData
      },
      signal
    });
  }
};

// src/api/invite.ts
import { makeURLSearchParams as makeURLSearchParams4 } from "@discordjs/rest";
import { Routes as Routes6 } from "discord-api-types/v10";
var InvitesAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "InvitesAPI");
  }
  /**
   * Fetches an invite
   *
   * @see {@link https://discord.com/developers/docs/resources/invite#get-invite}
   * @param code - The invite code
   * @param query - The options for fetching the invite
   * @param options - The options for fetching the invite
   */
  async get(code, query = {}, { signal } = {}) {
    return this.rest.get(Routes6.invite(code), {
      query: makeURLSearchParams4(query),
      signal
    });
  }
  /**
   * Deletes an invite
   *
   * @see {@link https://discord.com/developers/docs/resources/invite#delete-invite}
   * @param code - The invite code
   * @param options - The options for deleting the invite
   */
  async delete(code, { reason, signal } = {}) {
    await this.rest.delete(Routes6.invite(code), { reason, signal });
  }
};

// src/api/oauth2.ts
import { makeURLSearchParams as makeURLSearchParams5 } from "@discordjs/rest";
import {
  Routes as Routes7,
  RouteBases
} from "discord-api-types/v10";
var OAuth2API = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "OAuth2API");
  }
  /**
   * Creates an OAuth2 authorization URL given the options
   *
   * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-authorization-url-example}
   * @param options - The options for creating the authorization URL
   */
  generateAuthorizationURL(options) {
    const url = new URL(`${RouteBases.api}${Routes7.oauth2Authorization()}`);
    url.search = makeURLSearchParams5(options).toString();
    return url.toString();
  }
  /**
   * Performs an OAuth2 token exchange, giving you an access token
   *
   * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-exchange-example}
   * @param body - The body of the token exchange request
   * @param options - The options for the token exchange request
   */
  async tokenExchange(body, { signal } = {}) {
    return this.rest.post(Routes7.oauth2TokenExchange(), {
      body: makeURLSearchParams5(body),
      passThroughBody: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      signal
    });
  }
  /**
   * Refreshes an OAuth2 access token, giving you a new one
   *
   * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-refresh-token-exchange-example}
   * @param body - The options for the refresh token request
   * @param options - The options for the refresh token request
   */
  async refreshToken(body, { signal } = {}) {
    return this.rest.post(Routes7.oauth2TokenExchange(), {
      body: makeURLSearchParams5(body),
      passThroughBody: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      signal
    });
  }
  /**
   * Fetches the bearer token for the current application
   *
   * @remarks
   * This is primarily used for testing purposes
   * @see {@link https://discord.com/developers/docs/topics/oauth2#client-credentials-grant}
   * @param body - The options for the client credentials grant request
   * @param options - The options for the client credentials grant request
   */
  async getToken(body, { signal } = {}) {
    return this.rest.post(Routes7.oauth2TokenExchange(), {
      body: makeURLSearchParams5(body),
      passThroughBody: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      signal
    });
  }
  /**
   * Fetches the current bot's application information
   *
   * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information}
   * @param options - The options for the current bot application information request
   */
  async getCurrentBotApplicationInformation({ signal } = {}) {
    return this.rest.get(Routes7.oauth2CurrentApplication(), {
      signal
    });
  }
  /**
   * Fetches the current authorization information
   *
   * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
   * @param options - The options for the current authorization information request
   */
  async getCurrentAuthorizationInformation({ signal } = {}) {
    return this.rest.get(Routes7.oauth2CurrentAuthorization(), {
      signal
    });
  }
};

// src/api/roleConnections.ts
import {
  Routes as Routes8
} from "discord-api-types/v10";
var RoleConnectionsAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "RoleConnectionsAPI");
  }
  /**
   * Gets the role connection metadata records for the application
   *
   * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records}
   * @param applicationId - The id of the application to get role connection metadata records for
   * @param options - The options for fetching the role connection metadata records
   */
  async getMetadataRecords(applicationId, { signal } = {}) {
    return this.rest.get(Routes8.applicationRoleConnectionMetadata(applicationId), {
      signal
    });
  }
  /**
   * Updates the role connection metadata records for the application
   *
   * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records}
   * @param applicationId - The id of the application to update role connection metadata records for
   * @param body - The new role connection metadata records
   * @param options - The options for updating the role connection metadata records
   */
  async updateMetadataRecords(applicationId, body, { signal } = {}) {
    return this.rest.put(Routes8.applicationRoleConnectionMetadata(applicationId), {
      body,
      signal
    });
  }
};

// src/api/stageInstances.ts
import {
  Routes as Routes9
} from "discord-api-types/v10";
var StageInstancesAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "StageInstancesAPI");
  }
  /**
   * Creates a new stage instance
   *
   * @see {@link https://discord.com/developers/docs/resources/stage-instance#get-stage-instance}
   * @param body - The data for creating the new stage instance
   * @param options - The options for creating the new stage instance
   */
  async create(body, { reason, signal } = {}) {
    return this.rest.post(Routes9.stageInstances(), {
      body,
      reason,
      signal
    });
  }
  /**
   * Fetches a stage instance
   *
   * @see {@link https://discord.com/developers/docs/resources/stage-instance#get-stage-instance}
   * @param channelId - The id of the channel
   * @param options - The options for fetching the stage instance
   */
  async get(channelId, { signal } = {}) {
    return this.rest.get(Routes9.stageInstance(channelId), { signal });
  }
  /**
   * Edits a stage instance
   *
   * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance}
   * @param channelId - The id of the channel
   * @param body - The new stage instance data
   * @param options - The options for editing the stage instance
   */
  async edit(channelId, body, { reason, signal } = {}) {
    return this.rest.patch(Routes9.stageInstance(channelId), {
      body,
      reason,
      signal
    });
  }
  /**
   * Deletes a stage instance
   *
   * @see {@link https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance}
   * @param channelId - The id of the channel
   * @param options - The options for deleting the stage instance
   */
  async delete(channelId, { reason, signal } = {}) {
    await this.rest.delete(Routes9.stageInstance(channelId), { reason, signal });
  }
};

// src/api/sticker.ts
import {
  Routes as Routes10
} from "discord-api-types/v10";
var StickersAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "StickersAPI");
  }
  /**
   * Fetches all of the sticker packs
   *
   * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
   * @param options - The options for fetching the sticker packs
   */
  async getStickers({ signal } = {}) {
    return this.rest.get(Routes10.stickerPacks(), { signal });
  }
  /**
   * Fetches all of the sticker packs
   *
   * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
   * @param options - The options for fetching the sticker packs
   * @deprecated Use {@link StickersAPI.getStickers} instead.
   */
  async getNitroStickers(options = {}) {
    return this.getStickers(options);
  }
  /**
   * Fetches a sticker
   *
   * @see {@link https://discord.com/developers/docs/resources/sticker#get-sticker}
   * @param stickerId - The id of the sticker
   * @param options - The options for fetching the sticker
   */
  async get(stickerId, { signal } = {}) {
    return this.rest.get(Routes10.sticker(stickerId), { signal });
  }
};

// src/api/thread.ts
import {
  Routes as Routes11
} from "discord-api-types/v10";
var ThreadsAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "ThreadsAPI");
  }
  /**
   * Adds the current user to a thread
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#join-thread}
   * @param threadId - The id of the thread to join
   * @param options - The options for joining the thread
   */
  async join(threadId, { signal } = {}) {
    await this.rest.put(Routes11.threadMembers(threadId, "@me"), { signal });
  }
  /**
   * Adds a member to a thread
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#add-thread-member}
   * @param threadId - The id of the thread to add the member to
   * @param userId - The id of the user to add to the thread
   * @param options - The options for adding the member to the thread
   */
  async addMember(threadId, userId, { signal } = {}) {
    await this.rest.put(Routes11.threadMembers(threadId, userId), { signal });
  }
  /**
   * Removes the current user from a thread
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#leave-thread}
   * @param threadId - The id of the thread to leave
   * @param options - The options for leaving the thread
   */
  async leave(threadId, { signal } = {}) {
    await this.rest.delete(Routes11.threadMembers(threadId, "@me"), { signal });
  }
  /**
   * Removes a member from a thread
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#remove-thread-member}
   * @param threadId - The id of the thread to remove the member from
   * @param userId - The id of the user to remove from the thread
   * @param options - The options for removing the member from the thread
   */
  async removeMember(threadId, userId, { signal } = {}) {
    await this.rest.delete(Routes11.threadMembers(threadId, userId), { signal });
  }
  /**
   * Fetches a member of a thread
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#get-thread-member}
   * @param threadId - The id of the thread to fetch the member from
   * @param userId - The id of the user
   * @param options - The options for fetching the member
   */
  async getMember(threadId, userId, { signal } = {}) {
    return this.rest.get(Routes11.threadMembers(threadId, userId), { signal });
  }
  /**
   * Fetches all members of a thread
   *
   * @see {@link https://discord.com/developers/docs/resources/channel#list-thread-members}
   * @param threadId - The id of the thread to fetch the members from
   * @param options - The options for fetching the members
   */
  async getAllMembers(threadId, { signal } = {}) {
    return this.rest.get(Routes11.threadMembers(threadId), { signal });
  }
};

// src/api/user.ts
import { makeURLSearchParams as makeURLSearchParams6 } from "@discordjs/rest";
import {
  Routes as Routes12
} from "discord-api-types/v10";
var UsersAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "UsersAPI");
  }
  /**
   * Fetches a user by their id
   *
   * @see {@link https://discord.com/developers/docs/resources/user#get-user}
   * @param userId - The id of the user to fetch
   * @param options - The options for fetching the user
   */
  async get(userId, { signal } = {}) {
    return this.rest.get(Routes12.user(userId), { signal });
  }
  /**
   * Returns the user object of the requester's account
   *
   * @see {@link https://discord.com/developers/docs/resources/user#get-current-user}
   * @param options - The options for fetching the current user
   */
  async getCurrent({ signal } = {}) {
    return this.rest.get(Routes12.user("@me"), { signal });
  }
  /**
   * Returns a list of partial guild objects the current user is a member of
   *
   * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds}
   * @param query - The query options for fetching the current user's guilds
   * @param options - The options for fetching the guilds
   */
  async getGuilds(query = {}, { signal } = {}) {
    return this.rest.get(Routes12.userGuilds(), {
      query: makeURLSearchParams6(query),
      signal
    });
  }
  /**
   * Leaves the guild with the given id
   *
   * @see {@link https://discord.com/developers/docs/resources/user#leave-guild}
   * @param guildId - The id of the guild
   * @param options - The options for leaving the guild
   */
  async leaveGuild(guildId, { signal } = {}) {
    await this.rest.delete(Routes12.userGuild(guildId), { signal });
  }
  /**
   * Edits the current user
   *
   * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user}
   * @param body - The new data for the current user
   * @param options - The options for editing the user
   */
  async edit(body, { signal } = {}) {
    return this.rest.patch(Routes12.user("@me"), { body, signal });
  }
  /**
   * Fetches the guild member for the current user
   *
   * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guild-member}
   * @param guildId - The id of the guild
   * @param options - The options for fetching the guild member
   */
  async getGuildMember(guildId, { signal } = {}) {
    return this.rest.get(Routes12.userGuildMember(guildId), { signal });
  }
  /**
   * Edits the guild member for the current user
   *
   * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-member}
   * @param guildId - The id of the guild
   * @param body - The new data for the guild member
   * @param options - The options for editing the guild member
   */
  async editCurrentGuildMember(guildId, body = {}, { reason, signal } = {}) {
    return this.rest.patch(Routes12.guildMember(guildId, "@me"), {
      reason,
      body,
      signal
    });
  }
  /**
   * Opens a new DM channel with a user
   *
   * @see {@link https://discord.com/developers/docs/resources/user#create-dm}
   * @param userId - The id of the user to open a DM channel with
   * @param options - The options for opening the DM
   */
  async createDM(userId, { signal } = {}) {
    return this.rest.post(Routes12.userChannels(), {
      body: { recipient_id: userId },
      signal
    });
  }
  /**
   * Gets the current user's connections
   *
   * @see {@link https://discord.com/developers/docs/resources/user#get-user-connections}
   * @param options - The options for fetching the user's connections
   */
  async getConnections({ signal } = {}) {
    return this.rest.get(Routes12.userConnections(), { signal });
  }
  /**
   * Gets the current user's active application role connection
   *
   * @see {@link https://discord.com/developers/docs/resources/user#get-user-application-role-connection}
   * @param applicationId - The id of the application
   * @param options - The options for fetching the role connections
   */
  async getApplicationRoleConnection(applicationId, { signal } = {}) {
    return this.rest.get(Routes12.userApplicationRoleConnection(applicationId), {
      signal
    });
  }
  /**
   * Updates the current user's application role connection
   *
   * @see {@link https://discord.com/developers/docs/resources/user#update-user-application-role-connection}
   * @param applicationId - The id of the application
   * @param body - The data for updating the application role connection
   * @param options - The options for updating the application role connection
   */
  async updateApplicationRoleConnection(applicationId, body, { signal } = {}) {
    return this.rest.put(Routes12.userApplicationRoleConnection(applicationId), {
      body,
      signal
    });
  }
};

// src/api/voice.ts
import { Routes as Routes13 } from "discord-api-types/v10";
var VoiceAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "VoiceAPI");
  }
  /**
   * Fetches all voice regions
   *
   * @see {@link https://discord.com/developers/docs/resources/voice#list-voice-regions}
   * @param options - The options for fetching the voice regions
   */
  async getVoiceRegions({ signal } = {}) {
    return this.rest.get(Routes13.voiceRegions(), { signal });
  }
};

// src/api/webhook.ts
import { makeURLSearchParams as makeURLSearchParams7 } from "@discordjs/rest";
import {
  Routes as Routes14
} from "discord-api-types/v10";
var WebhooksAPI = class {
  constructor(rest) {
    this.rest = rest;
  }
  static {
    __name(this, "WebhooksAPI");
  }
  /**
   * Fetches a webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook}
   * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-with-token}
   * @param id - The id of the webhook
   * @param options - The options for fetching the webhook
   */
  async get(id, { token, signal } = {}) {
    return this.rest.get(Routes14.webhook(id, token), {
      signal,
      auth: !token
    });
  }
  /**
   * Edits a webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook}
   * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token}
   * @param id - The id of the webhook to edit
   * @param body - The new webhook data
   * @param options - The options for editing the webhook
   */
  async edit(id, body, { token, reason, signal } = {}) {
    return this.rest.patch(Routes14.webhook(id, token), {
      reason,
      body,
      signal,
      auth: !token
    });
  }
  /**
   * Deletes a webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook}
   * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token}
   * @param id - The id of the webhook to delete
   * @param options - The options for deleting the webhook
   */
  async delete(id, { token, reason, signal } = {}) {
    await this.rest.delete(Routes14.webhook(id, token), {
      reason,
      signal,
      auth: !token
    });
  }
  /**
   * Executes a webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook}
   * @param id - The id of the webhook
   * @param token - The token of the webhook
   * @param body - The data for executing the webhook
   * @param options - The options for executing the webhook
   */
  async execute(id, token, {
    wait,
    thread_id,
    files,
    ...body
  }, { signal } = {}) {
    return this.rest.post(Routes14.webhook(id, token), {
      query: makeURLSearchParams7({ wait, thread_id }),
      files,
      body,
      auth: false,
      signal
    });
  }
  /**
   * Executes a slack webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook}
   * @param id - The id of the webhook
   * @param token - The token of the webhook
   * @param body - The data for executing the webhook
   * @param query - The query options for executing the webhook
   * @param options - The options for executing the webhook
   */
  async executeSlack(id, token, body, query = {}, { signal } = {}) {
    await this.rest.post(Routes14.webhookPlatform(id, token, "slack"), {
      query: makeURLSearchParams7(query),
      body,
      auth: false,
      signal
    });
  }
  /**
   * Executes a github webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook}
   * @param id - The id of the webhook
   * @param token - The token of the webhook
   * @param body - The data for executing the webhook
   * @param query - The options for executing the webhook
   * @param options - The options for executing the webhook
   */
  async executeGitHub(id, token, body, query = {}, { signal } = {}) {
    await this.rest.post(Routes14.webhookPlatform(id, token, "github"), {
      query: makeURLSearchParams7(query),
      body,
      signal,
      auth: false
    });
  }
  /**
   * Fetches an associated message from a webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message}
   * @param id - The id of the webhook
   * @param token - The token of the webhook
   * @param messageId - The id of the message to fetch
   * @param query - The query options for fetching the message
   * @param options - The options for fetching the message
   */
  async getMessage(id, token, messageId, query = {}, { signal } = {}) {
    return this.rest.get(Routes14.webhookMessage(id, token, messageId), {
      query: makeURLSearchParams7(query),
      auth: false,
      signal
    });
  }
  /**
   * Edits an associated message from a webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message}
   * @param id - The id of the webhook
   * @param token - The token of the webhook
   * @param messageId - The id of the message to edit
   * @param body - The data for editing the message
   * @param options - The options for editing the message
   */
  async editMessage(id, token, messageId, {
    thread_id,
    files,
    ...body
  }, { signal } = {}) {
    return this.rest.patch(Routes14.webhookMessage(id, token, messageId), {
      query: makeURLSearchParams7({ thread_id }),
      auth: false,
      body,
      signal,
      files
    });
  }
  /**
   * Deletes an associated message from a webhook
   *
   * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message}
   * @param id - The id of the webhook
   * @param token - The token of the webhook
   * @param messageId - The id of the message to delete
   * @param query - The options for deleting the message
   * @param options - The options for deleting the message
   */
  async deleteMessage(id, token, messageId, query = {}, { signal } = {}) {
    await this.rest.delete(Routes14.webhookMessage(id, token, messageId), {
      query: makeURLSearchParams7(query),
      auth: false,
      signal
    });
  }
};

// src/api/index.ts
var API = class {
  constructor(rest) {
    this.rest = rest;
    this.applicationCommands = new ApplicationCommandsAPI(rest);
    this.applications = new ApplicationsAPI(rest);
    this.channels = new ChannelsAPI(rest);
    this.guilds = new GuildsAPI(rest);
    this.invites = new InvitesAPI(rest);
    this.roleConnections = new RoleConnectionsAPI(rest);
    this.oauth2 = new OAuth2API(rest);
    this.stageInstances = new StageInstancesAPI(rest);
    this.stickers = new StickersAPI(rest);
    this.threads = new ThreadsAPI(rest);
    this.users = new UsersAPI(rest);
    this.voice = new VoiceAPI(rest);
    this.webhooks = new WebhooksAPI(rest);
    this.interactions = new InteractionsAPI(rest, this.webhooks);
  }
  static {
    __name(this, "API");
  }
  applicationCommands;
  applications;
  channels;
  guilds;
  interactions;
  invites;
  oauth2;
  roleConnections;
  stageInstances;
  stickers;
  threads;
  users;
  voice;
  webhooks;
};

// src/util/files.ts
function withFiles(files, options) {
  const body = {
    ...options,
    attachments: files.map((file, index) => ({
      id: index.toString(),
      description: file.description
    }))
  };
  const outputFiles = files.map((file, index) => ({
    name: file.name ?? index.toString(),
    data: file.data
  }));
  return { body, files: outputFiles };
}
__name(withFiles, "withFiles");

// src/http-only/index.ts
export * from "discord-api-types/v10";
var version = "1.1.1";
export {
  API,
  ApplicationCommandsAPI,
  ApplicationsAPI,
  ChannelsAPI,
  GuildsAPI,
  InteractionsAPI,
  InvitesAPI,
  OAuth2API,
  RoleConnectionsAPI,
  StageInstancesAPI,
  StickersAPI,
  ThreadsAPI,
  UsersAPI,
  VoiceAPI,
  WebhooksAPI,
  version,
  withFiles
};
//# sourceMappingURL=http-only.mjs.map