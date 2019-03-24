<?php

/*  Rheda: visualizer and control panel
 *  Copyright (C) 2016  o.klimenko aka ctizen
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace Rheda;

if (file_exists(__DIR__ . '/local/index.php')) {
    include __DIR__ . '/local/index.php';
} else {
    class Sysconf
    {
        const DEBUG_MODE_COOKIE_LIFE = 86400;

        // Common settings
        const API_VERSION_MAJOR = 1;
        const API_VERSION_MINOR = 0;
        const DEBUG_MODE = true; // TODO -> to false in prod!

        const COOKIE_TOKEN_KEY = 'authToken';
        const COOKIE_ID_KEY = 'currentPersonId';
        const COOKIE_EVENT_KEY = 'currentEventId';

        public static function API_URL() {
            return getenv('MIMIR_URL');
        }

        public static function MOBILE_CLIENT_URL() {
            return getenv('TYR_URL');
        }

        public static function AUTH_API_URL() {
            return getenv('FREY_URL');
        }
    }
}


