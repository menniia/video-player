# Video Player App

## Overview

The Video Player App is a simple React application that allows users to select and play different videos. The app consists of three main components:

- `App`: The main component that manages the video source state and renders the `Video` and `Menu` components.
- `Video`: A component that displays a video player with controls.
- `Menu`: A component that provides options to select different videos using radio buttons.

## Features

- **Video Selection**: Users can choose from different video options using the radio buttons in the `Menu` component.
- **Video Playback**: The selected video plays automatically with controls enabled and sound muted.

## Components

### `App`

- Manages the state of the video source using the `useState` hook.
- Renders the `Video` component with the selected video source.
- Renders the `Menu` component and passes a callback to handle video selection.

### `Video`

- Receives the `src` prop and renders a `<video>` element with controls enabled.
- The video is set to autoplay and is muted by default.

### `Menu`

- Renders radio buttons for different video options.
- Calls the `onSelectVideo` callback when a radio button is selected to update the video source.

## Setup

To set up and run this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/video-player-app.git
   cd video-player-app
   ```
