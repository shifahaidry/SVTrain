<template>
  <div class="container-fluid">
    <b-row>
      <b-col>
        <div class="title-container">
          <div>
            <h4>SVTrain</h4>
          </div>
        </div>
        <div class="cmd-main-menu">
          <div>
            Workspace: <strong>{{ currentWs }}</strong>
          </div>
          <div v-if="running !== null" v-html="running || 'idle'"></div>
          <b v-else>no info</b>
          <template v-for="command in commands">
            <div
              v-if="aiOptions[command.value]"
              :key="command.value"
              class="cmd"
            >
              <b-button
                class="svtrain-cmd-btn"
                :class="
                  command.value === 'script_stop_validate'
                    ? 'btn-stop-command'
                    : 'btn-command'
                "
                v-bind:disabled="
                  !!isLoading[command.value] ||
                  (command.value === 'script_stop_validate' && !running) ||
                  (command.value !== 'script_stop_validate' && !!running)
                "
                v-on:click="runCommand(command.value, workspace)"
              >
                <v-icon
                  v-if="!command.icon"
                  v-bind:name="
                    command.value === 'script_stop_validate' ? 'stop' : 'play'
                  "
                />
                <svg-icon v-else :icon-class="command.icon"></svg-icon>
                <span class="ml-2">{{ command.label }}</span>
              </b-button>
              <b-button
                v-if="
                  command.btn && ![null, undefined].includes(logs[command.btn])
                "
                variant="light"
                class="ml-2"
                @click="downloadExport(command.btn)"
              >
                <span v-if="typeof logs[command.btn] === 'string'"
                  >Download</span
                >
                <span class="ml-2" v-else>Zipping</span>
              </b-button>
              <span class="ml-2" v-if="isLoading[command.value]"
                >Running...</span
              >
              <pre
                style="padding-left: 10px"
                v-if="logs[command.value] && logs[command.value].lastLine"
                class="log-line"
                @click="openLogsFor(command.value)"
                v-html="logs[command.value].lastLine"
              />
              <div style="clear: both" />
            </div>
          </template>
        </div>
      </b-col>
      <b-col cols="9" class="has-board">
        <b-tabs>
          <b-tab title="Logs" active>
            <pre v-html="validateLog" class="logs"></pre>
          </b-tab>
          <b-tab title="Generate AI Report">
            <iframe :src="generateAIReportURL"></iframe>
          </b-tab>
          <b-tab title="Last Report">
            <iframe :src="lastReportURL"></iframe>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import axios from 'axios'
import { isProduction, getFileServerPath } from '@/utils'
import command from '../mixins/command'
import api from '../utils/api'

export default {
  name: 'Validate',
  mixins: [command],
  data() {
    return {
      commands: [
        {
          value: 'script_validate',
          label: 'Run validate batch',
        },
        {
          value: 'script_stop_validate',
          label: 'Stop running validate',
        },
        {
          value: 'script_export_model',
          label: 'Run export model',
          btn: 'export_model',
          icon: 'export',
        },
        {
          value: 'script_export_result',
          label: 'Run export results',
          btn: 'export_results',
          icon: 'export',
        },
        {
          value: 'script_export_image',
          label: 'Run export images',
          btn: 'export_images',
          icon: 'ExportImage',
        },
        {
          value: 'script_report',
          label: 'Report',
          icon: 'report',
        },
        {
          value: 'script_validate2',
          label: 'Backup',
          icon: 'save',
        },
      ],
      validateLog: null,
      interval: null,
      generateAIReportURL: null,
      lastReportURL: null,
    }
  },
  methods: {
    downloadExport(field) {
      if (this.logs[field] === 1) return
      const url = `${isProduction() ? '' : 'http://127.0.0.1:3333'}/data/${
        this.logs[field]
      }?sessionToken=${localStorage.getItem(
        'sessionToken',
      )}&is_export=true&field=${field}`
      const link = document.createElement('a')
      link.href = url
      link.setAttribute(
        'download',
        `${field}${field === 'export_images' ? '.zip' : ''}`,
      )
      document.body.appendChild(link)
      link.click()
    },
    async fetch() {
      const ws = this.currentWs.split('/').pop()
      await axios
        .get(`${getFileServerPath()}${ws}/externalpath.json`)
        .then(({ data }) => {
          if (data) {
            this.generateAIReportURL = data.generateAIReportURL
            this.lastReportURL = data.lastReportURL
          }
        })
    },
    async getLog() {
      await api.getLogFor('validate').then((res) => {
        this.validateLog = res
      })
    },
  },
  mounted() {
    api.refreshToken()
    this.fetch()
    this.getLog()
    this.interval = setInterval(this.getLog, 2000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>
<style lang="scss">
.has-board {
  .tab-content {
    height: calc(100vh - 200px);
    border-width: 1px;
    border-style: solid;
    border-color: transparent #dee2e6 #dee2e6;
    padding: 16px;
    overflow: auto;

    .tab-pane,
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
.logs {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
}
</style>
