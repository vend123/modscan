# Modbus Manager Pro v1.5.0

Two major new features for monitoring and operations: a built-in **Historian** for data logging and a full **Alarm system** with thresholds, levels, history and sound.

## 📈 Historian — data logging

Log register and tag values to a local database and review them over time.

- One-click logging from any poll window (📈 button) or tag
- Trend chart with selectable time ranges (1h / 24h / 7d / all / custom)
- Per-series deadband to control data volume
- Live stats: min / max / average / point count
- CSV export for analysis in Excel or other tools
- Data management with configurable retention
- Logging state is saved per workspace and resumes automatically
- Stored in a local SQLite database — fully offline, no cloud required

## 🔔 Alarms — threshold monitoring

Define alarms on registers or tags and get notified when values cross your limits.

- Sources: registers **or** tags
- Conditions: greater / less / equal / not equal / between / outside range
- Two-level escalation: **Warning** (yellow) and **Critical** (red), with automatic escalation
- Hysteresis to prevent flickering near the limit
- Activation delay to ignore momentary spikes
- Acknowledge alarms, with full alarm history (raised / acknowledged / cleared)
- Optional sound per alarm — repeating or single beep, with different tones for warning and critical, plus a global mute
- Optional description per alarm for added context
- Dedicated Alarms tab that works independently of the dashboard

## 📊 Dashboard integration

- The Alarm List dashboard widget can now display **live alarms from the alarm system** (in addition to the existing manual-threshold mode)
- Acknowledge alarms directly from the dashboard — click a row, or use "Ack all"
- Ideal for full-screen HMI / operator views

## 🌍 Localization

All new features are fully translated into all 11 supported languages.

## Notes

- Historian and Alarms are Pro-edition features.
- Your existing workspaces and settings are preserved.

---

Download the installer below and run it to update. Your license and data carry over automatically.
