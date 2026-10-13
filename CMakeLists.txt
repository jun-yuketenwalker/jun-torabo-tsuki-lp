if(CONFIG_SHIELD_TORABO_TSUKI_LP_LEFT OR CONFIG_SHIELD_TORABO_TSUKI_LP_RIGHT)
  zephyr_library()
  zephyr_include_directories(${APPLICATION_SOURCE_DIR}/include)
  zephyr_library_sources(src/board.c src/mini_trackpad_init_reg.c)

  # Vendored copy of sekigon-gonnoc/zmk-driver-hires-dial's sources, kept in this
  # repo instead of pulled in as a separate west project: adding that project to
  # config/west.yml broke the unrelated trackpad (input-trackpad-mini) build on
  # hardware, confirmed by a test-fit swap, even though nothing in this repo's own
  # devicetree/keymap for the trackpad build changed. Root cause not identified,
  # but this sidesteps it entirely since ZMK_EXTRA_MODULES already points at this
  # repo for the board/shield/snippet files -- no second west project needed.
  zephyr_library_sources_ifdef(CONFIG_ZMK_HIRES_DIAL src/hires_dial.c)
  if((NOT CONFIG_ZMK_SPLIT) OR CONFIG_ZMK_SPLIT_ROLE_CENTRAL)
    zephyr_library_sources_ifdef(CONFIG_ZMK_HIRES_DIAL src/behaviors/behavior_hires_dial_encoder.c)
    zephyr_library_sources_ifdef(CONFIG_ZMK_HIRES_DIAL src/behaviors/behavior_hires_dial_scroll.c)
    zephyr_library_sources_ifdef(CONFIG_ZMK_HIRES_DIAL src/behaviors/behavior_hires_dial_radial_controller.c)
    zephyr_library_sources_ifdef(CONFIG_ZMK_HIRES_DIAL src/behaviors/behavior_hires_dial_radial_controller_button.c)
  endif()
endif()