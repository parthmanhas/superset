/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/core';
import {
  ControlPanelConfig,
  ControlSubSectionHeader,
  D3_TIME_FORMAT_DOCS,
  DEFAULT_TIME_FORMAT,
  formatSelectOptions,
  sharedControls,
} from '@superset-ui/chart-controls';
import { showValueControl } from '../controls';

const config: ControlPanelConfig = {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['x_axis'],
        ['time_grain_sqla'],
        ['groupby'],
        ['metric'],
        ['adhoc_filters'],
        ['row_limit'],
      ],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        [showValueControl],
        [
          {
            name: 'show_legend',
            config: {
              type: 'CheckboxControl',
              label: t('Show legend'),
              renderTrigger: true,
              default: false,
              description: t('Whether to display a legend for the chart'),
            },
          },
        ],
        [
          {
            name: 'show_total',
            config: {
              type: 'CheckboxControl',
              label: t('Show Total'),
              default: true,
              renderTrigger: true,
              description: t('Show the total value in the waterfall chart'),
            },
          },
        ],
        [
          {
            name: 'useFirstValueAsSubtotal',
            config: {
              type: 'CheckboxControl',
              label: t('Use first value as subtotal'),
              default: false,
              renderTrigger: true,
              description: t('Render the first bar in the chart as a subtotal'),
            },
          },
        ],
        [
          <ControlSubSectionHeader>
            {t('Series colors')}
          </ControlSubSectionHeader>,
        ],
        [
          {
            name: 'increase_color',
            config: {
              label: t('Increase'),
              type: 'ColorPickerControl',
              default: { r: 90, g: 193, b: 137, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'decrease_color',
            config: {
              label: t('Decrease'),
              type: 'ColorPickerControl',
              default: { r: 224, g: 67, b: 85, a: 1 },
              renderTrigger: true,
            },
          },
          {
            name: 'subtotal_color',
            config: {
              type: 'ColorPickerControl',
              label: t('Subtotal'),
              default: { r: 102, g: 102, b: 102, a: 1 },
              renderTrigger: true,
              description: t('Color of the subtotal bars'),
            },
          },
          {
            name: 'total_color',
            config: {
              label: t('Total'),
              type: 'ColorPickerControl',
              default: { r: 102, g: 102, b: 102, a: 1 },
              renderTrigger: true,
            },
          },
        ],
        [<ControlSubSectionHeader>{t('X Axis')}</ControlSubSectionHeader>],
        [
          {
            name: 'x_axis_label',
            config: {
              type: 'TextControl',
              label: t('X Axis Label'),
              renderTrigger: true,
              default: '',
            },
          },
        ],
        [
          {
            name: 'x_axis_time_format',
            config: {
              ...sharedControls.x_axis_time_format,
              default: DEFAULT_TIME_FORMAT,
              description: `${D3_TIME_FORMAT_DOCS}.`,
            },
          },
        ],
        [
          {
            name: 'x_ticks_layout',
            config: {
              type: 'SelectControl',
              label: t('X Tick Layout'),
              choices: formatSelectOptions([
                'auto',
                'flat',
                '45°',
                '90°',
                'staggered',
              ]),
              default: 'auto',
              clearable: false,
              renderTrigger: true,
              description: t('The way the ticks are laid out on the X-axis'),
            },
          },
        ],
        [
          {
            name: 'sort_x_axis',
            config: {
              type: 'SelectControl',
              label: t('Sort X Axis'),
              default: 'none',
              choices: [
                ['none', t('None')],
                ['asc', t('Ascending')],
                ['desc', t('Descending')],
              ],
              renderTrigger: true,
              description: t('Sort X axis in ascending or descending order'),
            },
          },
        ],
        [
          {
            name: 'orientation',
            config: {
              type: 'SelectControl',
              label: t('Orientation'),
              default: 'vertical',
              choices: [
                ['vertical', t('Vertical')],
                ['horizontal', t('Horizontal')],
              ],
              renderTrigger: true,
              description: t('Orientation of the chart'),
            },
          },
        ],
        [<ControlSubSectionHeader>{t('Y Axis')}</ControlSubSectionHeader>],
        [
          {
            name: 'y_axis_label',
            config: {
              type: 'TextControl',
              label: t('Y Axis Label'),
              renderTrigger: true,
              default: '',
            },
          },
        ],
        ['y_axis_format'],
        ['currency_format'],
      ],
    }
  ],
  controlOverrides: {
    groupby: {
      label: t('Breakdowns'),
      description:
        t(`Breaks down the series by the category specified in this control.
      This can help viewers understand how each category affects the overall value.`),
      multi: false,
    },
  },
};

export default config;
