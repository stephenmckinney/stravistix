/**
 *   NearbySegmentsModifier is responsible of ...
 */
function NearbySegmentsModifier(jsonSegments, appResources) {
    this.segments_ = jsonSegments;
    this.appResources_ = appResources;
}

/**
 * Define prototype
 */
NearbySegmentsModifier.prototype = {

    modify: function modify() {

        var html = "<div class='module' style='padding-bottom: 10px;'>";
        html += "<div class='drop-down-menu' style='width: 100%; background: #fc4c02; color: white;' >";
        html += "<div class='selection'><img style='vertical-align:middle' src='" + this.appResources_.trackChangesIcon + "'/> <span>Nearby Cycling+Running Segments</span></div>";
        html += "<ul class='options' style='max-height: 800px;'>";

        var segment;
        var segmentName;
        var segmentIconType;

        for (var i = 0; i < this.segments_.length; i++) {

            segment = this.segments_[i];

            segmentName = segment.name + " <i>@ " + (segment.distance / 1000).toFixed(1) + "k, " + segment.avg_grade.toFixed(1) + "%";

            if (segment.climb_category > 0) {
                segmentName += ", Cat. " + segment.climb_category_desc;
            }

            segmentName += '</i>';

            if (segment.type === 'cycling') {
                segmentIconType = "<span class='icon-ride sprite type' style='margin-right: 7px; opacity: 0.3;'/>";
            } else if (segment.type === 'running') {
                segmentIconType = "<span class='icon-run sprite type' style='margin-right: 7px; opacity: 0.3;'/>";
            } else {
                segmentIconType = "";
            }

            html += "<li style='max-width: 600px;'><a href='/segments/" + segment.id + "'>" + segmentIconType + segmentName + "</a></li>";
        }

        html += "</ul>";
        html += "</div>";
        html += "</div>";

        $(html).prependTo('.col-md-3.spans5');
    }
};
